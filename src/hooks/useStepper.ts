import { computed, ref } from 'vue';

interface UseStepperProps {
  max: number;
}

export function useStepper({ max }: UseStepperProps) {
  const currentStep = ref<number>(0);
  const isFirstStep = computed<boolean>(() => currentStep.value === 0);
  const isLastStep = computed<boolean>(() => currentStep.value === max);

  const nextStep = () => {
    if (isLastStep.value) {
      return;
    }

    currentStep.value += 1;
  };

  const prevStep = () => {
    if (isFirstStep.value) {
      return;
    }

    currentStep.value -= 1;
  };

  const resetStep = () => {
    currentStep.value = 0;
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    resetStep,
    isFirstStep,
    isLastStep,
  };
}
