<script setup lang="ts">
import type { WelcomeData } from './base.types';
import { COLOR_VALUE } from '@/constants';

interface SectionWelcomeProps {
  text: WelcomeData[0];
  btnTitle: WelcomeData[1];
}

const props = defineProps<SectionWelcomeProps>();
const emit = defineEmits(['play:start']);

const onPlayStart = () => emit('play:start');
</script>

<template>
  <div class="text-center flex flex-col gap-4 p-4 rounded-lg">
    <p>{{ props.text }}</p>
    <AppButton
      class="hover:opacity-80 mt-4 self-center"
      type="submit"
      :color="COLOR_VALUE.welcome.text"
      :bgColor="COLOR_VALUE.welcome.bg"
      @click="onPlayStart"
    >
      {{ props.btnTitle }}
    </AppButton>
  </div>
</template>
