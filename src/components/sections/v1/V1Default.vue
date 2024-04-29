<script setup lang="ts">
import V1Base from './V1Base.vue';
import type { V1SectionDefault } from './v1.types';
import { calcTextDuration } from '@/utils';

const { data } = defineProps<{ data: V1SectionDefault }>();

const [, text] = data;

const totalDuration = calcTextDuration(text);
</script>

<template>
  <V1Base :duration="totalDuration">
    {{ text }}
  </V1Base>
</template>
