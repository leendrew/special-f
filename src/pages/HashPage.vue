<script setup lang="ts">
import { useRoute } from 'vue-router';
import AppContainer from '@/components/ui/AppContainer.vue';
import SectionsResolver from '@/components/sections/SectionsResolver.vue';
import type { Data } from '@/components/sections/base.types';

const {
  params: { hash },
} = useRoute();

const data = JSON.parse(atob(hash as string)) as Data;
if (!('version' in data)) {
  console.error('wrong hash value');
}
</script>

<template>
  <main class="main py-4">
    <AppContainer>
      <SectionsResolver v-bind="data" />
    </AppContainer>
  </main>
  <footer class="min-h-[2rem]">
    <AppContainer class="text-center">
      by
      <a
        class="underline"
        href="https://github.com/leendrew"
      >
        @leendrew
      </a>
    </AppContainer>
  </footer>
</template>
