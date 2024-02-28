<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStepper } from '@/hooks';
import AppButton from '@/components/ui/AppButton.vue';
import V1Default from './V1Default.vue';
import V1WordChange from './V1WordChange.vue';
import V1Typing from './V1Typing.vue';
import type { V1Data } from './v1.types.ts';

const { sections } = defineProps<Required<Pick<V1Data, 'sections'>>>();

const v1Map = {
  default: V1Default,
  'word-change': V1WordChange,
  typing: V1Typing,
};

const { currentStep, nextStep, prevStep, resetStep, isLastStep } = useStepper({
  max: sections.length - 1,
});
const currentSection = computed(() => sections[currentStep.value]);

const isRepeatBtnShow = ref(false);
const repeatBtnShowDelay = 1000;

const onNextStep = () => {
  if (isLastStep.value) {
    setTimeout(() => {
      isRepeatBtnShow.value = true;
    }, repeatBtnShowDelay);
  } else {
    isRepeatBtnShow.value = false;
  }

  nextStep();
};

const onRepeat = () => {
  resetStep();
  isRepeatBtnShow.value = false;
};
</script>

<template>
  <div class="p-4 rounded-lg text-4xl">
    <component
      :key="currentStep"
      :is="v1Map[currentSection.type]"
      v-bind="currentSection"
      @step:next="onNextStep"
      @step:prev="prevStep"
    />
    <template v-if="isRepeatBtnShow">
      <AppButton
        class="mt-6 mx-auto"
        v-motion
        :initial="{
          y: 20,
          opacity: 0,
        }"
        :enter="{
          y: 0,
          opacity: 1,
        }"
        :leave="{
          y: -1000,
          opacity: 0,
        }"
        @click="onRepeat"
      >
        Повторить
      </AppButton>
    </template>
  </div>
</template>
