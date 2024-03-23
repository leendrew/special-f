<script setup lang="ts">
import { useRouter } from 'vue-router';
import { hashedData } from '@/config/data';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';

const router = useRouter();

const navigate = () => router.push({ name: 'hash', params: { hash: hashedData } });
</script>

<template>
  <MainLayout>
    <AppContainer class="max-w-screen-lg">
      <h1>Home Page</h1>
      <AppButton
        class="mt-4"
        @click="navigate"
      >
        To Page
      </AppButton>
    </AppContainer>
  </MainLayout>
</template>
