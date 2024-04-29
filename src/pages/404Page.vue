<script setup lang="ts">
import { useRouter } from 'vue-router';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';

const router = useRouter();

const onNavigateClick = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <MainLayout>
    <AppContainer>
      <span>404 Error</span>
      <AppButton
        class="mt-4"
        @click="onNavigateClick"
      >
        На главную
      </AppButton>
    </AppContainer>
  </MainLayout>
</template>
