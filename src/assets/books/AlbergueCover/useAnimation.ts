import { RefObject, useEffect, useRef } from 'react';

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

class CircleAnimation {
  speed: number;
  target: { x: number; y: number };
  cursor: { x: number; y: number };
  coverElement: HTMLDivElement;
  circleElement: HTMLDivElement;
  coverCoord: RefObject<DOMRect | undefined>;
  raf: number | null;

  constructor(
    coverElement: HTMLDivElement,
    circleElement: HTMLDivElement,
    coverCoord: RefObject<DOMRect>,
  ) {
    this.coverElement = coverElement;
    this.circleElement = circleElement;
    this.coverCoord = coverCoord;

    this.target = {
      x: coverElement.clientWidth / 2,
      y: coverElement.clientHeight / 2,
    };
    this.cursor = {
      x: coverElement.clientWidth / 2,
      y: coverElement.clientHeight / 2,
    };
    this.speed = 0.1;
    this.raf = null;
    this.init();
  }

  onMouseMove = (e) => {
    const mouseX = e ? e.pageX - this.coverCoord.current.left : null;
    const mouseY = e ? e.pageY - this.coverCoord.current.top : null;

    this.target.x = Math.min(
      Math.max(0, mouseX ?? this.coverElement.clientWidth / 2),
      this.coverElement.clientWidth,
    );

    this.target.y = Math.min(
      Math.max(0, mouseY ?? this.coverElement.clientHeight / 2),
      this.coverElement.clientHeight,
    );

    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  };

  render = () => {
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);

    this.circleElement.style.clipPath = `circle(30% at ${this.cursor.x}px ${this.cursor.y}px)`;

    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
        Math.pow(this.target.y - this.cursor.y, 2),
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }

    this.raf = requestAnimationFrame(this.render);
  };

  startAnimation = (e) => {
    this.coverElement.classList.add('cover_init');
    this.onMouseMove(e);
  };

  endAnimation = () => {
    this.onMouseMove();
  };

  init = () => {
    this.coverElement.ontouchstart = (e) => {
      e.preventDefault();
      this.startAnimation(e.touches[0]);
    };
    this.coverElement.onmousemove = this.startAnimation;
    this.coverElement.ontouchmove = (e) => this.startAnimation(e.touches[0]);
    this.coverElement.onmouseout = this.endAnimation;
    this.coverElement.ontouchend = this.endAnimation;
  };
}

const useAnimation = (
  coverElement: RefObject<HTMLDivElement>,
  circleElement: RefObject<HTMLDivElement>,
) => {
  const coverCoord = useRef<DOMRect | undefined>(
    coverElement.current?.getBoundingClientRect(),
  );

  useEffect(() => {
    if (coverElement.current && circleElement.current) {
      const circle = new CircleAnimation(
        coverElement.current,
        circleElement.current,
        coverCoord,
      );

      const ro = new ResizeObserver(() => {
        coverCoord.current = coverElement.current?.getBoundingClientRect();
        circle.onMouseMove();
        circle.render();
      });

      ro.observe(coverElement.current);

      window.onresize = () => {
        coverCoord.current = coverElement.current?.getBoundingClientRect();
      };
    }
  }, [coverElement, circleElement]);
};

export default useAnimation;
