<script setup lang="ts">
import V1Base from './V1Base.vue';
import type { V1SectionDefault } from './v1.types';
import { calcTextDuration } from '@/utils';

interface V1DefaultProps {
  data: V1SectionDefault;
}

const props = defineProps<V1DefaultProps>();

const [, text] = props.data;

const totalDuration = calcTextDuration(text);
</script>

<template>
  <V1Base
    class="text-center"
    :duration="totalDuration"
  >
    {{ text }}
  </V1Base>
</template>
