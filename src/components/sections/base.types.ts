import type { V1Data } from './v1/v1.types';

type WelcomeText = string;
type WelcomeBtnTitle = string;
export type WelcomeData = [WelcomeText, WelcomeBtnTitle];

export type BaseData<Version extends number, SectionData> = [Version, WelcomeData, SectionData];

export type Data = V1Data;

const SECTION_TYPE = {
  default: 1,
  wordChange: 2,
  typing: 3,
} as const;

export type SectionType = typeof SECTION_TYPE;
