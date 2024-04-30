<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';
import SectionsResolver from '@/components/sections/SectionsResolver.vue';
import { encodingService, compressService } from '@/utils';
import { ROUTE } from '@/constants';

const {
  params: { hash },
} = useRoute();
const router = useRouter();

const isLoading = ref(true);
const version = ref(null);
const welcomeData = ref(null);
const sectionsData = ref(null);

const compressedBytesArray = encodingService.base64StringToArrayBuffer(hash as string);
compressService.decompress(compressedBytesArray).then((bytesArray) => {
  const utf8String = encodingService.arrayBufferToUtf8String(bytesArray);
  const data = JSON.parse(utf8String);

  if (typeof data[0] !== 'number') {
    router.push({ name: ROUTE.error.name });
  }

  version.value = data[0];
  welcomeData.value = data[1];
  sectionsData.value = data[2];

  isLoading.value = false;
});
</script>

<template>
  <MainLayout>
    <AppContainer>
      <template v-if="!isLoading">
        <!-- @vue-expect-error -->
        <SectionsResolver
          :version
          :welcomeData
          :sectionsData
        />
      </template>
    </AppContainer>
  </MainLayout>
</template>
