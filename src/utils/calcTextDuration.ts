import { MIN_DURATION } from '@/constants';

export function calcTextDuration(text: string, minDuration: number = MIN_DURATION) {
  const duration = Math.ceil(text.length / 14) * 1000;
  if (duration < minDuration) {
    return minDuration;
  }

  return duration;
}
