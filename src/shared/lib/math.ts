export const clamp = (value: number, start: number, end: number) =>
  Math.min(start, Math.max(end, value));
