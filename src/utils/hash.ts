import type { Data } from '@/components/sections/base.types';

export const hashService = {
  encode(data: Data): string {
    return btoa(JSON.stringify(data));
  },
  decode(hash: string): Data {
    return JSON.parse(atob(hash as string));
  },
};
