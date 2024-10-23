<script setup lang="ts">
import { useAttrs } from 'vue';

const { color, bgColor } = defineProps<{ color?: string; bgColor?: string }>();
const attrs = useAttrs();

const isDisabled = attrs.disabled;
</script>

<template>
  <button
    v-bind="attrs"
    class="block px-4 min-h-8 text-base outline-offset-2 rounded-md duration-200 ease-out cursor-pointer"
    :style="{
      color,
      backgroundColor: bgColor,
    }"
    :class="{
      'text-white': !color,
      'bg-indigo-600 hover:bg-indigo-500': !bgColor,
      'opacity-50': isDisabled,
    }"
  >
    <slot />
  </button>
</template>
