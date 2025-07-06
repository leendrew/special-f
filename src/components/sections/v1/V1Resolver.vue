<script setup lang="ts">
import { computed, ref } from 'vue';
import { useMotions } from '@vueuse/motion';
import { useStepper } from '@/hooks';
import V1Default from './V1Default.vue';
import V1WordChange from './V1WordChange.vue';
import V1Typing from './V1Typing.vue';
import type { V1Data, V1Section } from './v1.types.ts';

interface V1ResolverProps {
  sectionsData: V1Data[2];
}

const props = defineProps<V1ResolverProps>();

const motions = useMotions();

const v1SectionMap = {
  1: V1Default,
  2: V1WordChange,
  3: V1Typing,
};

const { currentStep, nextStep, prevStep, resetStep, isLastStep } = useStepper({
  max: props.sectionsData.length - 1,
});
const currentSection = computed<V1Section>(() => props.sectionsData[currentStep.value]);

const isRepeatBtnShow = ref<boolean>(false);
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
    <Transition
      mode="out-in"
      @leave="(_, done) => motions.v1.leave(done)"
    >
      <component
        :key="currentStep"
        :is="v1SectionMap[currentSection[0]]"
        :data="currentSection"
        @step:next="onNextStep"
        @step:prev="prevStep"
      />
    </Transition>
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
        @click="onRepeat"
      >
        Повторить
      </AppButton>
    </template>
  </div>
</template>
