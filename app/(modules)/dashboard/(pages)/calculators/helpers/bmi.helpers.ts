export function calculateBMI(weight: number, height: number): number {
  height = height / 100;
  const result = weight / (height * height);
  return Math.round(result * 10) / 10;
}
