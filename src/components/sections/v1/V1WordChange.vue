<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import V1Base from './V1Base.vue';
import type { V1SectionWordChange } from './v1.types';
import { calcTextDuration } from '@/utils';

const { data } = defineProps<{ data: V1SectionWordChange }>();

const [, text, targetIndex, variants] = data;

const variantDuration = 1200;
const variantDelay = 500;

const textDuration = calcTextDuration(text);
const totalDuration = textDuration + variants.length * variantDuration;

const words = text.split(' ');
// because displayed text excluded target word
variants.unshift(words[targetIndex]);

const currentIndex = ref(0);
const currentVariant = computed(() => variants[currentIndex.value]);
const currentDuration = computed(() => (currentIndex.value === 0 ? 0 : variantDelay));

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
  <V1Base :duration="totalDuration">
    <template v-for="(word, index) in words">
      <template v-if="index === targetIndex">
        <span
          :key="currentIndex"
          class="inline-block"
          v-motion="'v1WordChange'"
          :initial="{
            y: -10,
            opacity: 0,
            rotateX: -90,
          }"
          :enter="{
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
              ease: 'linear',
              opacity: {
                duration: currentDuration / 2,
              },
              y: {
                duration: currentDuration,
              },
              rotateX: {
                duration: currentDuration,
              },
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
