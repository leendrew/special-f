<script setup lang="ts">
import V1Base from './V1Base.vue';
import type { V1SectionTyping } from './v1.types';
import { randomBetween } from '@/utils';

const { text, charDuration } = withDefaults(defineProps<V1SectionTyping>(), {
  charDuration: 150,
});
const totalDuration = charDuration * text.length + 500;
const charDurationDispersion = 50;

const chars = text.split('');
</script>

<template>
  <V1Base
    :text="text"
    :duration="totalDuration"
  >
    <template v-for="(char, index) in chars">
      <span
        v-motion
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
          transition: {
            ease: 'linear',
            duration: 1,
            delay:
              index * charDuration + randomBetween(-charDurationDispersion, charDurationDispersion),
          },
        }"
      >
        {{ char }}
      </span>
    </template>
  </V1Base>
</template>
