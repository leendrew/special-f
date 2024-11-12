<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useMotions } from '@vueuse/motion';
import XMarkIcon from '@/components/ui/icons/XMarkIcon.vue';

// FIX: on open focus with shift+tab going outside modal component

interface AppModalProps {
  modelValue: boolean;
  title: string;
}

const props = defineProps<AppModalProps>();
const emit = defineEmits(['update:modelValue']);

const motions = useMotions();

const modalRef = ref<HTMLDivElement | null>(null);

const onOpen = () => {
  if (!modalRef.value) {
    return;
  }

  modalRef.value.focus();
};

const onClose = () => {
  emit('update:modelValue', false);
};

watch(
  () => props.modelValue,
  (value) => {
    if (!value) {
      return;
    }

    nextTick(() => {
      onOpen();
    });
  },
);

const trapFocus = (event: KeyboardEvent) => {
  if (!modalRef.value) {
    return;
  }

  const focusableElements = modalRef.value.querySelectorAll<HTMLElement>(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])',
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      return;
    }

    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', trapFocus);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', trapFocus);
});
</script>

<template>
  <Teleport to="#modal-root">
    <Transition
      mode="out-in"
      @leave="(_, done) => motions.modal.leave(done)"
    >
      <template v-if="props.modelValue">
        <div
          ref="modalRef"
          v-motion="'modal'"
          class="fixed inset-0 flex items-center justify-center z-50"
          :tabindex="-1"
          :initial="{
            opacity: 0,
          }"
          :enter="{
            opacity: 1,
          }"
          :leave="{
            opacity: 0,
          }"
        >
          <AppOverlay @click.self="onClose" />
          <div class="container p-6 z-10 w-full max-w-md rounded-lg shadow-lg">
            <slot name="header">
              <header class="mb-4 flex gap-2">
                <h2 class="flex-grow text-xl">{{ props.title }}</h2>
                <button @click="onClose">
                  <XMarkIcon class="size-6" />
                </button>
              </header>
            </slot>
            <slot />
            <slot name="actions">
              <footer class="mt-4">
                <AppButton @click="onClose">Закрыть</AppButton>
              </footer>
            </slot>
          </div>
        </div>
      </template>
    </Transition>
  </Teleport>
</template>

<style scoped>
.container {
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
