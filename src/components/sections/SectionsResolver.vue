<script setup lang="ts">
import { ref } from 'vue';
import { useRootColor } from '@/hooks';
import SectionWelcome from './SectionWelcome.vue';
import V1Resolver from './v1/V1Resolver.vue';
import type { Data } from './base.types';
import { COLOR_VALUE } from '@/constants';

// FIX: bug, if sectionsData.length === 1, repeat don't work

interface SectionResolverProps {
  version: Data[0];
  welcomeData: Data[1];
  sectionsData: Data[2];
}

const props = defineProps<SectionResolverProps>();

useRootColor({ text: COLOR_VALUE.section.text, bg: COLOR_VALUE.section.bg });

const [text, btnTitle] = props.welcomeData;

const resolverMap = {
  1: V1Resolver,
};

const isPlaying = ref<boolean>(false);
const onPlayStart = () => {
  isPlaying.value = true;
};
</script>

<template>
  <div class="max-w-screen-sm mx-auto mt-72 text-2xl">
    <template v-if="!isPlaying">
      <SectionWelcome
        :text
        :btnTitle
        @play:start="onPlayStart"
      />
    </template>
    <template v-else>
      <component
        :is="resolverMap[props.version]"
        :sectionsData="props.sectionsData"
      />
    </template>
  </div>
</template>
