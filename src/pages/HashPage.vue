<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';
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
  <MainLayout>
    <AppContainer>
      <SectionsResolver v-bind="data" />
    </AppContainer>
  </MainLayout>
</template>
