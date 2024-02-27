<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import V1Base from './V1Base.vue';
import type { V1SectionWordChange } from './v1.types';
import { calcTextDuration } from '@/utils';

const { text, target, variants, duration, variantDuration, variantDelay } = withDefaults(
  defineProps<V1SectionWordChange>(),
  {
    variantDuration: 1500,
    variantDelay: 200,
  },
);
const textDuration = calcTextDuration(text);
const totalDuration = duration || textDuration + (variants.length - 1) * variantDuration;

const words = text.split(' ');
const targetIndex = words.indexOf(target);

const currentIndex = ref(0);
const currentVariant = computed(() => variants[currentIndex.value]);

const changeWord = () => {
  const intervalId = setInterval(() => {
    if (currentIndex.value === variants.length - 1) {
      clearInterval(intervalId);
      return;
    }

    currentIndex.value += 1;
  }, variantDuration);
};

onMounted(() => {
  setTimeout(() => {
    if (targetIndex !== -1) {
      changeWord();
    }
  }, textDuration - variantDuration);
});
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
    <template v-for="(word, index) in words">
      <template v-if="index === targetIndex">
        <span
          :key="currentIndex"
          class="inline-block"
          v-motion
          :duration="variantDelay"
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
          {{ currentVariant }}
        </span>
      </template>
      <template v-else>
        {{ word }}
      </template>
      {{ ' ' }}
    </template>
  </V1Base>
</template>
