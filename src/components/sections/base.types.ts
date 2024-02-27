import type { V1Data } from './v1/v1.types';

export type WelcomeData = {
  message: string;
  btn: {
    title: string;
    textColor: string;
    bgColor: string;
  };
};

export type BaseData<V extends number, S> = {
  version: V;
  sections?: S;
  textColor: string;
  bgColor: string;
};

export type Data = V1Data;
