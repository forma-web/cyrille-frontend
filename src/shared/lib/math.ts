export function clamp(value: number, start: number, end: number) {
  return Math.min(start, Math.max(end, value));
}
