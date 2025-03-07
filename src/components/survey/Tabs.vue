<script setup lang="ts">
import { useRoute } from 'vue-router';

defineProps<{
  data: {
    label: string;
    link: string;
  }[];
}>();

const route = useRoute();
</script>

<template>
  <ul class="flex w-full rounded-sm overflow-hidden">
    <li
      v-for="tab in data"
      :key="tab.link"
      :class="{ 'bg-sky-100': tab.link === route.name }"
      class="flex-1 text-center"
    >
      <RouterLink :to="{ name: tab.link }" class="flex justify-center w-full h-full py-3">
        {{ tab.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
