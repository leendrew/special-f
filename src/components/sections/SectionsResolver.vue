<script setup lang="ts">
import { ref } from 'vue';
import { useRootColor } from '@/hooks';
import AppButton from '@/components/ui/AppButton.vue';
import V1Resolver from './v1/V1Resolver.vue';
import type { Data, WelcomeData } from './base.types';
import type { V1Data } from './v1/v1.types';

const welcomeData = {
  message: 'Ни в коем случае не нажимай на эту кнопку',
  btn: {
    title: 'Бабло !!1',
    textColor: '#ffffff',
    bgColor: '#4f46e5',
  },
} satisfies WelcomeData;

const sections = [
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
] satisfies V1Data['sections'];

const { version, textColor, bgColor } = defineProps<Data>();
useRootColor({ text: textColor, bg: bgColor });

const resolver = {
  1: V1Resolver,
};

const isPlaying = ref(false);
const play = () => {
  isPlaying.value = true;
};
</script>

<template>
  <div class="max-w-screen-sm mx-auto mt-72 text-2xl">
    <template v-if="!isPlaying">
      <div class="text-center flex flex-col gap-4 p-4 rounded-lg">
        <p>{{ welcomeData.message }}</p>
        <AppButton
          class="hover:opacity-80 mt-4 self-center"
          type="submit"
          :color="welcomeData.btn.textColor"
          :bgColor="welcomeData.btn.bgColor"
          @click="play"
        >
          {{ welcomeData.btn.title }}
        </AppButton>
      </div>
    </template>
    <template v-else>
      <component
        :is="resolver[version]"
        :sections="sections"
      />
    </template>
  </div>
</template>
