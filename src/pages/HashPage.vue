<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
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
    <div class="container mx-auto my-0">
      <div class="flex flex-col gap-2">
        <h1>Hash Page</h1>
        {{ data }}
        <button @click="navigate">To Home</button>
        <SectionsResolver v-bind="data" />
      </div>
    </div>
  </main>
</template>
