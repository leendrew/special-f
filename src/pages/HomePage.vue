<script setup lang="ts">
import { useRouter } from 'vue-router';
import { dataTest } from '@/config/test.data';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';
import { encodingService, compressService } from '@/utils';
import { ROUTE } from '@/constants';

const router = useRouter();

const utf8String = JSON.stringify(dataTest);

const onNavigateClick = () => {
  const bytesArray = encodingService.utf8StringToArrayBuffer(utf8String);
  compressService.compress(bytesArray).then((compressedBytesArray) => {
    const base64String = encodingService.arrayBufferToBase64String(compressedBytesArray);
    router.push({ name: ROUTE.hash.name, params: { hash: base64String } });
  });
};
</script>

<template>
  <MainLayout>
    <AppContainer class="max-w-screen-lg">
      <h1>Home Page</h1>
      <AppButton
        class="mt-4"
        @click="onNavigateClick"
      >
        To Page
      </AppButton>
      {{ utf8String }}
    </AppContainer>
  </MainLayout>
</template>
