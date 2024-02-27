<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppButton from '@/components/ui/AppButton.vue';
import type { Data } from '@/components/sections/base.types';

const router = useRouter();

const data = {
  version: 1,
  textColor: '#27272a',
  bgColor: '#fdf4ff',
} satisfies Data;

const hashedData = computed(() => btoa(JSON.stringify(data)));
console.log('@hash length', hashedData.value.length);

const navigate = () => router.push({ name: 'hash', params: { hash: hashedData.value } });
</script>

<template>
  <main class="main py-4">
    <AppContainer class="max-w-screen-lg">
      <h1>Home Page</h1>
      <p>{{ hashedData }}</p>
      <p>{{ data }}</p>
      <AppButton
        class="mt-4"
        @click="navigate"
      >
        To Page
      </AppButton>
    </AppContainer>
  </main>
</template>
