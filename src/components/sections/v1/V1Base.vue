<script setup lang="ts">
import { onMounted } from 'vue';

const { text, duration, ...rest } = defineProps<{ text: string; duration: number; rest?: {} }>();
const emit = defineEmits(['step:next', 'step:prev']);

onMounted(() => {
  setTimeout(() => {
    emit('step:next');
  }, duration);
});
</script>

<template>
  <div
    v-motion
    v-bind="rest"
  >
    <slot />
  </div>
</template>
