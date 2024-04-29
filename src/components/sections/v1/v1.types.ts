import type { BaseData } from '../base.types';

type SectionText = string;

export type V1SectionDefault = [1, SectionText];

type SectionWordChangeTarget = number;
type SectionWordChangeVariants = string[];
export type V1SectionWordChange = [
  2,
  SectionText,
  SectionWordChangeTarget,
  SectionWordChangeVariants,
];

export type V1SectionTyping = [3, SectionText];

export type V1Section = V1SectionDefault | V1SectionWordChange | V1SectionTyping;

export type V1Sections = V1Section[];

export type V1Data = BaseData<1, V1Sections>;
