import type { WelcomeData, Data } from '@/components/sections/base.types';
import type { V1Data } from '@/components/sections/v1/v1.types';

/**
 *  [0] - WelcomeText
 *  [1] - WelcomeBtnTitle
 */
const welcomeDataTest = [
  'Этот текст показывается на приветственном экране',
  'Этот текст показывается на кнопке',
] satisfies WelcomeData;

/**
 *  [][0] - SectionType, 1 - default, 2 - word-change, 3 - typing
 */
const sectionsDataTest = [
  [1, 'Этот текст должен появиться и исчезнуть'],
  [2, 'Этот текст должен менять слово', 4, ['на', 'другое']],
  [3, 'Этот текст должен печататься'],
  [1, 'После этого сообщения должна появится кнопка повтора'],
] satisfies V1Data[2];

/**
 *  [0] - Version
 *  [1] - WelcomeData
 *  [2] - SectionsData
 */
export const dataTest = [1, welcomeDataTest, sectionsDataTest] satisfies Data;
