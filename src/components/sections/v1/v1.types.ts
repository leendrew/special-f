import type { BaseData } from '../base.types';

export type V1SectionDefault = {
  type: 'default';
  text: string;
  duration?: number;
};

export type V1SectionWordChange = {
  type: 'word-change';
  text: string;
  duration?: number;
  target: string;
  variants: string[];
  variantDuration?: number;
  variantDelay?: number;
};

export type V1SectionTyping = {
  type: 'typing';
  text: string;
  charDuration?: number;
};

export type V1Section = V1SectionDefault | V1SectionWordChange | V1SectionTyping;

export type V1Sections = V1Section[];

export type V1Data = BaseData<1, V1Sections>;
