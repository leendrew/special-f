<script setup lang="ts">
import V1Base from './V1Base.vue';
import type { V1SectionDefault } from './v1.types';
import { calcTextDuration } from '@/utils';

const { text, duration } = defineProps<V1SectionDefault>();
const totalDuration = duration || calcTextDuration(text);
</script>

<template>
  <V1Base
    :text="text"
    :duration="totalDuration"
    :initial="{
      y: -10,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        bounce: 0,
      },
    }"
  >
    {{ text }}
  </V1Base>
</template>
