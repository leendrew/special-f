<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppButton from '@/components/ui/AppButton.vue';
import SectionsResolver from '@/components/sections/SectionsResolver.vue';
import type { Data } from '@/components/sections/base.types';

const router = useRouter();
const {
  params: { hash },
} = useRoute();

const data = JSON.parse(atob(hash as string)) as Data;
if (!('version' in data)) {
  console.error('wrong hash value');
}

const navigate = () => router.push({ name: 'home' });
</script>

<template>
  <main class="main py-4">
    <AppContainer>
      <AppButton @click="navigate">To Home</AppButton>
      <SectionsResolver v-bind="data" />
    </AppContainer>
  </main>
</template>
