import { minDuration } from '@/constants';

export function calcTextDuration(text: string) {
  const duration = Math.ceil(text.length / 14) * 1000;
  if (duration < minDuration) {
    return minDuration;
  }

  return duration;
}
