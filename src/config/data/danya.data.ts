import { hashService } from '@/utils';
import type { WelcomeData, Data } from '@/components/sections/base.types';
import type { V1Data } from '@/components/sections/v1/v1.types';

export const welcomeData = {
  message: 'Ни в коем случае не нажимай на эту кнопку',
  btn: {
    title: 'Бабло !!1',
    textColor: '#ffffff',
    bgColor: '#4f46e5',
  },
} satisfies WelcomeData;

export const sectionsData = [
  {
    type: 'default',
    text: 'Опа, заскамил мамонта 🦣',
  },
  {
    type: 'default',
    text: 'Как же тебя легко забайтить, пипяо...',
  },
  {
    type: 'typing',
    text: 'Смотри, как умею',
  },
  {
    type: 'default',
    text: 'Круто, правда? 😁',
  },
  {
    type: 'default',
    text: 'Хотел еще всяких штук добавить',
  },
  {
    type: 'default',
    text: 'Но не успел 😞',
  },
  {
    type: 'default',
    text: 'Куда я так спешил? 👀',
  },
  {
    type: 'default',
    text: 'Так сегодня же праздник! 🥳',
  },
  {
    type: 'default',
    text: 'С днем спички! 💥',
  },
  {
    type: 'default',
    text: 'Погоди 🤨',
  },
  {
    type: 'default',
    text: 'Cегодня же еще один праздник 😉',
  },
  {
    type: 'default',
    text: 'С Днем Рождения! 🎉',
  },
  {
    type: 'default',
    text: 'Ты крутой 😎',
  },
  {
    type: 'word-change',
    text: 'Желаю тебе здоровья',
    target: 'здоровья',
    variants: ['здоровья', 'любви 🥰', 'удачи 🍀'],
  },
  {
    type: 'default',
    text: 'Специально для тебя 😳',
  },
  {
    type: 'word-change',
    text: 'Да, да',
    target: 'да',
    variants: ['да', 'тебя 🫵'],
  },
  {
    type: 'typing',
    text: 'From Andrew with 🩵',
  },
] satisfies V1Data['sectionsData'];

const data = {
  version: 1,
  textColor: '#27272a',
  bgColor: '#fdf4ff',
  welcomeData,
  sectionsData,
} satisfies Data;

export const hashedData = hashService.encode(data);
