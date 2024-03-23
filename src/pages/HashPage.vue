<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AppContainer from '@/components/ui/AppContainer.vue';
import SectionsResolver from '@/components/sections/SectionsResolver.vue';
import { hashService } from '@/utils';

const {
  params: { hash },
} = useRoute();
const router = useRouter();

const data = hashService.decode(hash as string);
if (!('version' in data)) {
  router.push({ name: 'error' });
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
