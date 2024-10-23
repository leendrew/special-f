<script setup lang="ts">
import { onMounted, useAttrs } from 'vue';

interface V1BaseProps {
  duration: number;
}

const props = defineProps<V1BaseProps>();
const emit = defineEmits(['step:next', 'step:prev']);
const attrs = useAttrs();

onMounted(() => {
  setTimeout(() => {
    emit('step:next');
  }, props.duration);
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
