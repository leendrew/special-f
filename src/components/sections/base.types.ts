import type { V1Data } from './v1/v1.types';

type WelcomeText = string;
type WelcomeBtnTitle = string;
export type WelcomeData = [WelcomeText, WelcomeBtnTitle];

export type BaseData<Version extends number, SectionData> = [Version, WelcomeData, SectionData];

export type Data = V1Data;
