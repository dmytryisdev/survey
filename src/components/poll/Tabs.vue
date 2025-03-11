<script setup lang="ts">
import { useRoute } from 'vue-router';

interface TabsProps {
  data: {
    label: string;
    link: string;
  }[];
}

defineProps<TabsProps>();

const route = useRoute();
</script>

<template>
  <ul class="flex w-full rounded-sm overflow-hidden">
    <li
      v-for="tab in data"
      :key="tab.link"
      :class="{ 'bg-sky-100': tab.link === route.name }"
      class="flex-1 text-center transition duration-100 ease-in-out hover:bg-sky-200"
    >
      <RouterLink :to="{ name: tab.link }" class="flex justify-center w-full h-full py-3">
        {{ tab.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
