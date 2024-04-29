<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';
import SectionsResolver from '@/components/sections/SectionsResolver.vue';
import { encodeService } from '@/utils';
import { ROUTE } from '@/constants';

const {
  params: { hash },
} = useRoute();
const router = useRouter();

const [version, welcomeData, sectionsData] = JSON.parse(
  encodeService.base64ToString(hash as string),
);

if (typeof version !== 'number') {
  router.push({ name: ROUTE.error.name });
}
</script>

<template>
  <MainLayout>
    <AppContainer>
      <SectionsResolver
        :version
        :welcomeData
        :sectionsData
      />
    </AppContainer>
  </MainLayout>
</template>
