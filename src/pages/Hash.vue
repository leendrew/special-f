<script setup lang="ts">
import { useRoute } from 'vue-router';

const {
  params: { hash },
} = useRoute();
</script>

<template>
  <h1>Hash Page</h1>
  {{ hash }}
</template>
