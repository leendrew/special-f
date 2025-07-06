import { ref } from 'vue';

export function useForceRerender() {
  const rerenderTrigger = ref<number>(0);

  const forceRerender = () => {
    rerenderTrigger.value += 1;
  };

  return {
    rerenderTrigger,
    forceRerender,
  };
}
