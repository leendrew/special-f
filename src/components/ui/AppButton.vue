<script setup lang="ts">
import { useAttrs } from 'vue';

interface AppButtonProps {
  color?: string;
  bgColor?: string;
}

const props = defineProps<AppButtonProps>();
const attrs = useAttrs();

const isDisabled = attrs.disabled;
</script>

<template>
  <button
    v-bind="attrs"
    class="block px-4 min-h-8 text-base outline-offset-2 rounded-md duration-200 ease-out cursor-pointer"
    :style="{
      color: props.color,
      backgroundColor: props.bgColor,
    }"
    :class="{
      'text-white': !color,
      'bg-indigo-600 hover:bg-indigo-500': !props.bgColor,
      'opacity-50': isDisabled,
    }"
  >
    <slot />
  </button>
</template>
