<script setup lang="ts">
import type { WelcomeData } from './base.types';

const { message, btn } = defineProps<WelcomeData>();
const emit = defineEmits(['play:start']);

const onPlayStart = () => emit('play:start');
</script>

<template>
  <div class="text-center flex flex-col gap-4 p-4 rounded-lg">
    <p>{{ message }}</p>
    <AppButton
      class="hover:opacity-80 mt-4 self-center"
      type="submit"
      :color="btn.textColor"
      :bgColor="btn.bgColor"
      @click="onPlayStart"
    >
      {{ btn.title }}
    </AppButton>
  </div>
</template>
