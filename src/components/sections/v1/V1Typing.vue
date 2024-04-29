<script setup lang="ts">
import V1Base from './V1Base.vue';
import type { V1SectionTyping } from './v1.types';
import { randomService } from '@/utils';

const { data } = defineProps<{ data: V1SectionTyping }>();

const [, text] = data;

const charDuration = 150;
const totalDuration = charDuration * text.length + 1500;
const charDurationDispersion = 50;

const chars = text.split('');
</script>

<template>
  <V1Base
    :duration="totalDuration"
    :initial="{
      y: 0,
      opacity: 1,
    }"
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
              index * charDuration +
              randomService.randomBetween(-charDurationDispersion, charDurationDispersion),
          },
        }"
      >
        {{ char }}
      </span>
    </template>
  </V1Base>
</template>
