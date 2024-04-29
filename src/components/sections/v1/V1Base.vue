<script setup lang="ts">
import { onMounted, useAttrs } from 'vue';

const { duration } = defineProps<{ duration: number }>();
const emit = defineEmits(['step:next', 'step:prev']);
const attrs = useAttrs();

onMounted(() => {
  setTimeout(() => {
    emit('step:next');
  }, duration);
});
</script>

<template>
  <div
    v-motion="'v1'"
    :initial="{
      y: -10,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
    }"
    :leave="{
      opacity: 0,
    }"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>
