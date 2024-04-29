<script setup lang="ts">
import type { WelcomeData } from './base.types';

const { text, btnTitle } = defineProps<{ text: WelcomeData[0]; btnTitle: WelcomeData[1] }>();
const emit = defineEmits(['play:start']);

const onPlayStart = () => emit('play:start');
</script>

<template>
  <div class="text-center flex flex-col gap-4 p-4 rounded-lg">
    <p>{{ text }}</p>
    <AppButton
      class="hover:opacity-80 mt-4 self-center"
      type="submit"
      :color="btn.textColor"
      :bgColor="btn.bgColor"
      @click="onPlayStart"
    >
      {{ btnTitle }}
    </AppButton>
  </div>
</template>
