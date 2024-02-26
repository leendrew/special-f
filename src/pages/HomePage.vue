<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import * as colors from 'tailwindcss/colors';
import type { Data } from '@/components/sections/base.types';

const router = useRouter();

const data = {
  version: 1,
  textColor: colors.zinc[800],
  bgColor: colors.fuchsia[50],
} satisfies Data;

const hashedData = computed(() => btoa(JSON.stringify(data)));
console.log('@hash length', hashedData.value.length);

const navigate = () => router.push({ name: 'hash', params: { hash: hashedData.value } });
</script>

<template>
  <main class="main py-4">
    <div class="container mx-auto my-0">
      <div class="flex flex-col gap-2">
        <h1>Home Page</h1>
        <span>{{ hashedData }}</span>
        <span>{{ data }}</span>
        <button @click="navigate">To Page</button>
      </div>
    </div>
  </main>
</template>
