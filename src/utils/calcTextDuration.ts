export function calcTextDuration(text: string) {
  return Math.ceil(text.length / 16) * 1000;
}
