<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useMotions } from '@vueuse/motion';
import V1Base from './V1Base.vue';
import type { V1SectionWordChange } from './v1.types';
import { calcTextDuration } from '@/utils';

const { data } = defineProps<{ data: V1SectionWordChange }>();

const motions = useMotions();

const [, text, targetIndex, variants] = data;

const variantDuration = 1500;
const variantDelay = 500;

const textDuration = calcTextDuration(text);
const totalDuration = textDuration + variants.length * variantDuration + variantDelay;

const words = text.split(' ');

const currentIndex = ref(-1);
const isFirstTime = computed(() => currentIndex.value === -1);
const currentVariant = computed(() => {
  if (isFirstTime.value) {
    return words[targetIndex];
  }

  return variants[currentIndex.value];
});
const enterDelay = computed(() => {
  if (isFirstTime.value) {
    return 0;
  }

  return variantDelay;
});

const changeWord = () => {
  const intervalId = setInterval(() => {
    if (currentIndex.value === variants.length - 1) {
      clearInterval(intervalId);
      return;
    }

    if (isFirstTime.value) {
      motions.v1WordChange.apply('leave');
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
    :class="{
      'text-center': words.length === 1,
    }"
    :duration="totalDuration"
  >
    <template v-for="(word, index) in words">
      <template v-if="index === targetIndex">
        <span class="inline-flex overflow-hidden">
          <Transition
            mode="out-in"
            @leave="(_, done) => motions.v1WordChange.leave(done)"
          >
            <span
              :key="currentIndex"
              v-motion="'v1WordChange'"
              :initial="{
                y: -40,
                transition: {
                  ease: 'linear',
                  y: {
                    duration: variantDelay,
                  },
                },
              }"
              :enter="{
                y: 0,
                transition: {
                  ease: 'linear',
                  y: {
                    duration: enterDelay,
                  },
                },
              }"
              :leave="{
                y: 30,
                transition: {
                  ease: 'linear',
                  y: {
                    duration: variantDelay,
                  },
                  delay: variantDelay,
                },
              }"
            >
              {{ currentVariant }}
            </span>
          </Transition>
        </span>
      </template>
      <template v-else>
        {{ word }}
      </template>
      {{ ' ' }}
    </template>
  </V1Base>
</template>
