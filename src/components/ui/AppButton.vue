<script setup lang="ts">
const { color, bgColor } = defineProps<{ color?: string; bgColor?: string }>();
</script>

<template>
  <button
    v-bind="$attrs"
    class="block px-4 min-h-8 outline-offset-2 rounded-md duration-200 ease-out"
    :style="{
      color,
      backgroundColor: bgColor,
    }"
    :class="{
      'text-white': !color,
      'bg-indigo-600 hover:bg-indigo-500': !bgColor,
    }"
  >
    <slot />
  </button>
</template>
