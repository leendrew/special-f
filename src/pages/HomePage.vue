<script setup lang="ts">
import { useRouter } from 'vue-router';
import { dataTest } from '@/config/test.data';
import MainLayout from '@/components/ui/layouts/MainLayout.vue';
import { encodeService, testCompression, decodeService } from '@/utils';
import { ROUTE } from '@/constants';

const utf8Str = JSON.stringify(dataTest);
const hexStr = decodeService.arrayBufferToHexString(new TextEncoder().encode(utf8Str));
const base64Str = encodeService.stringToBase64(utf8Str);

console.log('--- utf8 ArrayBuffer:', new TextEncoder().encode(utf8Str).byteLength, 'bytes');
console.log('--- utf8 string length:', utf8Str.length, 'characters');
console.log('--- base64 ArrayBuffer:', new TextEncoder().encode(base64Str).byteLength, 'bytes');
console.log('--- base64 string length:', base64Str.length, 'characters');
console.log('--- hex ArrayBuffer:', new TextEncoder().encode(hexStr).byteLength, 'bytes');
console.log('--- hex string length:', hexStr.length, 'characters');

// testCompression(utf8Str, 'gzip')
// .then(() => {
//   return testCompression(utf8Str, 'deflate');
// })
testCompression(utf8Str, 'deflate-raw')
  // .then(() => {
  //   return testCompression(utf8Str, 'deflate-raw');
  // })
  // .then(() => {
  //   return testCompression(base64Str, 'gzip');
  // })
  // .then(() => {
  //   return testCompression(base64Str, 'deflate');
  // })
  .then(() => {
    return testCompression(base64Str, 'deflate-raw');
  })
  // .then(() => {
  //   return testCompression(hexStr, 'gzip');
  // })
  // .then(() => {
  //   return testCompression(hexStr, 'deflate');
  // })
  .then(() => {
    return testCompression(hexStr, 'deflate-raw');
  });

const router = useRouter();

const hashedData = encodeService.stringToBase64(JSON.stringify(dataTest));

const onNavigateClick = () => {
  router.push({ name: ROUTE.hash.name, params: { hash: hashedData } });
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
      {{ utf8Str }}
      <br />
      {{ base64Str }}
      <br />
      {{ hexStr }}
    </AppContainer>
  </MainLayout>
</template>
