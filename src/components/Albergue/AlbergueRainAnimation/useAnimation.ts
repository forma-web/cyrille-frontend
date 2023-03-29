import { useCallback, useEffect, useRef, useState } from 'react';

const MAX_NUMBERS_OF_PARTICLES = 2000;
const ANIMATION_TIME = 10000;

const BACKGROUND = 'white';
const INCLINE = 3;
const VERTICAL_SPEED_PARTICLE = 3;

const MASK_IMAGE_URL = '../albergue/rain-mask.jpg';

type TCanvasProps = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
};

type TCanvasDataProps = TCanvasProps & {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  mappedImage: number[][];
};

class Particle {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  speed: number;
  velocity: number;
  size: number;
  position1: number;
  position2: number;
  isVisible: boolean;
  canvasData: Canvas;

  constructor(canvasData: Canvas) {
    this.canvasData = canvasData;
    this.x = Math.random() * this.canvasData.canvas.width;
    this.y = 0;
    this.prevX = this.x;
    this.prevY = this.y;
    this.speed = 0;
    this.velocity = Math.random() * VERTICAL_SPEED_PARTICLE;
    this.size = Math.random() * 0.6 + 1.4;
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
    this.isVisible = true;
  }

  update(time = 0) {
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);

    this.speed =
      this.canvasData.mappedImage[this.position1][this.position2] * 3;
    const movement = Math.max(
      time / 3 + VERTICAL_SPEED_PARTICLE - this.speed + this.velocity,
      1,
    );

    this.prevX = this.x;
    this.prevY = this.y;

    this.y += movement;
    this.x += INCLINE;

    if (this.x >= this.canvasData.canvas.width) {
      this.x = 0;
    } else if (this.x <= 1) {
      this.x = this.canvasData.canvas.width - 1;
    }

    if (this.y >= this.canvasData.canvas.height) {
      this.isVisible = false;
    }
  }

  draw() {
    this.canvasData.ctx.beginPath();
    this.canvasData.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.canvasData.ctx.fill();
  }
}

class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  particlesArray: Particle[];
  handleShow: React.Dispatch<React.SetStateAction<boolean>>;
  mappedImage: number[][];

  constructor({ canvas, ctx, setActive, mappedImage }: TCanvasDataProps) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.particlesArray = this.getParticlesArray();
    this.mappedImage = mappedImage;
    this.handleShow = setActive;
  }

  getParticlesArray = () => {
    const numberOfParticles = Math.min(
      this.canvas.width * 6,
      MAX_NUMBERS_OF_PARTICLES,
    );

    return Array(numberOfParticles)
      .fill(0)
      .map(() => new Particle(this));
  };

  updateParticles = (time = 0) => {
    this.ctx.globalAlpha = 0.05;
    this.ctx.fillStyle = BACKGROUND;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'hsl(40 100% 50%)'; // Color of particles

    for (let i = 0; i < this.particlesArray.length; i++) {
      const currParticle = this.particlesArray[i];

      if (!currParticle.isVisible) continue;

      currParticle.update(time);
      this.ctx.globalAlpha = Math.max(currParticle.speed, 0.3) * 0.12;
      currParticle.draw();
    }
  };

  showCanvas = () => {
    this.canvas.style.opacity = '1';
  };

  hideCanvas = () => {
    this.handleShow(() => false);
  };
}

class MaskImage {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  image: HTMLImageElement;
  mappedImage: number[][];

  constructor({ canvas, ctx }: TCanvasProps) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.mappedImage = [];
  }

  init = async () => {
    await this.loadImage().then((pixels) => {
      const newMappedImage: number[][] = [];

      for (let y = 0; y < this.canvas.height; y++) {
        const row = [];
        for (let x = 0; x < this.canvas.width; x++) {
          const red = pixels.data[y * 4 * pixels.width + x * 4];
          const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
          const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
          const brightness = this.calculateRelativeBrightness(red, green, blue);
          row.push(brightness);
        }
        newMappedImage.push(row);
      }

      this.mappedImage = newMappedImage;
    });
  };

  loadImage = async () =>
    new Promise<ImageData>((resolve) => {
      this.image.onload = () => {
        this.ctx.drawImage(
          this.image,
          ...this.getPositionMaskImage(
            this.image.width,
            this.image.height,
            this.canvas.width,
            this.canvas.height,
          ),
        );
        const pixels = this.ctx.getImageData(
          0,
          0,
          this.canvas.width,
          this.canvas.height,
        );
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        resolve(pixels);
      };
      this.image.src = MASK_IMAGE_URL;
    });

  getPositionMaskImage = (
    imgWidth: number,
    imgHeight: number,
    containerWidth: number,
    containerHeight: number,
  ): [number, number, number, number] => {
    const width = containerWidth;
    const height = (width * imgHeight) / imgWidth;

    const left = 0;
    const top = containerHeight - height;

    return [left, top, width, height];
  };

  calculateRelativeBrightness = (red: number, green: number, blue: number) => {
    return (
      Math.sqrt(red ** 2 * 0.299 + green ** 2 * 0.587 + blue ** 2 * 0.114) / 100
    );
  };
}

export default () => {
  const [active, setActive] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskImageRef = useRef<MaskImage | null>(null);
  const requestIdRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const canvasData = useRef<Canvas | null>(null);

  const startAnimation = useCallback(() => {
    if (!modalRoot) {
      setModalRoot(() => document.getElementById('modal-main'));
    }
    setActive(() => true);
  }, [modalRoot]);
  const cancelAnimation = useCallback(() => setActive(() => false), []);

  const animateCanvas = useCallback((timestamp: number) => {
    if (!canvasData.current) return;

    const canvas = canvasData.current;

    if (startRef.current === null) startRef.current = timestamp;
    const elapsed = timestamp - startRef.current;

    canvas.updateParticles(elapsed / 1000);

    if (elapsed < ANIMATION_TIME) {
      requestIdRef.current = requestAnimationFrame(animateCanvas);
    } else {
      canvas.hideCanvas();

      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
        requestIdRef.current = null;
        startRef.current = null;
      }
    }
  }, []);

  const initCanvas = useCallback(async () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });

    if (!canvas || !ctx) {
      return;
    }

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    maskImageRef.current = new MaskImage({ canvas, ctx });
    await maskImageRef.current.init();

    canvasData.current = new Canvas({
      canvas,
      ctx,
      setActive,
      mappedImage: maskImageRef.current.mappedImage,
    });

    requestIdRef.current = requestAnimationFrame(animateCanvas);
  }, [animateCanvas]);

  useEffect(() => {
    if (!active || !canvasData) return;

    initCanvas();

    return () => {
      cancelAnimationFrame(requestIdRef.current!);
      requestIdRef.current = null;
      startRef.current = null;
    };
  }, [active, canvasData, initCanvas]);

  return {
    canvasRef,
    startAnimation,
    cancelAnimation,
    modalRoot,
    activeAnimation: active,
  };
};
