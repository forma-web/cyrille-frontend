import { useEffect, useRef } from 'react';

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

type TCircleAnimationElement = {
  coverElement: React.RefObject<HTMLDivElement>;
  circleElement: React.RefObject<HTMLImageElement>;
};

type TCircleAnimationProps = TCircleAnimationElement & {
  coverCoord: React.MutableRefObject<DOMRect | undefined>;
};

type TUseCursorProps = TCircleAnimationElement & {
  isInit: boolean;
};

class CircleAnimation {
  coverElement: React.RefObject<HTMLDivElement>;
  circleElement: React.RefObject<HTMLImageElement>;
  coverCoord: React.MutableRefObject<DOMRect | undefined>;
  target: { x: number; y: number };
  cursor: { x: number; y: number };
  speed: number;
  raf: number | null;

  constructor({
    coverElement,
    circleElement,
    coverCoord,
  }: TCircleAnimationProps & {
    coverCoord: React.MutableRefObject<DOMRect | undefined>;
  }) {
    this.coverElement = coverElement;
    this.circleElement = circleElement;
    this.coverCoord = coverCoord;
    this.target = {
      x: this.coverElement.current!.clientWidth / 2,
      y: this.coverElement.current!.clientHeight / 2,
    };
    this.cursor = {
      x: this.target.x,
      y: this.target.x,
    };
    this.speed = 0.1;
    this.raf = null;
    this.init();
  }

  onMouseMove = (e?: { pageX: number; pageY: number }) => {
    const coverElement = this.coverElement.current;
    const coverCoord = this.coverCoord.current;

    if (!coverElement || !coverCoord) return;

    const mouseX = e ? e.pageX - coverCoord.left : null;
    const mouseY = e ? e.pageY - coverCoord.top : null;

    this.target.x = Math.min(
      Math.max(0, mouseX ?? coverElement.clientWidth / 2),
      coverElement.clientWidth,
    );

    this.target.y = Math.min(
      Math.max(0, mouseY ?? coverElement.clientHeight / 2),
      coverElement.clientHeight,
    );

    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  };

  render = () => {
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);

    if (!this.circleElement.current) return;

    this.circleElement.current.style.clipPath = `circle(30% at ${this.cursor.x}px ${this.cursor.y}px)`;

    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
        Math.pow(this.target.y - this.cursor.y, 2),
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf!);
      this.raf = null;
      return;
    }

    this.raf = requestAnimationFrame(this.render);
  };

  startAnimation = (e: Touch | MouseEvent) => {
    this.onMouseMove(e);
  };

  endAnimation = () => {
    this.onMouseMove();
  };

  init = () => {
    const coverElement = this.coverElement.current!;

    coverElement.ontouchstart = (e) => {
      e.preventDefault();
      this.startAnimation(e.touches[0]);
    };
    coverElement.onmousemove = this.startAnimation;
    coverElement.ontouchmove = (e) => this.startAnimation(e.touches[0]);
    coverElement.onmouseout = this.endAnimation;
    coverElement.ontouchend = this.endAnimation;
  };
}

const useCursor = ({
  coverElement,
  circleElement,
  isInit,
}: TUseCursorProps) => {
  const coverCoord = useRef<DOMRect>();
  const circle = useRef<CircleAnimation>();

  useEffect(() => {
    if (!coverElement.current || !circleElement || !isInit) return;

    coverCoord.current = coverElement.current!.getBoundingClientRect();
    circle.current = new CircleAnimation({
      coverElement,
      circleElement,
      coverCoord,
    });

    const ro = new ResizeObserver(() => {
      coverCoord.current = coverElement.current!.getBoundingClientRect();
      circle.current!.onMouseMove();
      circle.current!.render();
    });

    // Resize events
    ro.observe(coverElement.current);
    window.onresize = () => {
      coverCoord.current = coverElement.current!.getBoundingClientRect();
    };

    return () => {
      ro.disconnect();
      window.onresize = null;
    };
  }, [coverElement, circleElement, isInit]);
};

export default useCursor;
