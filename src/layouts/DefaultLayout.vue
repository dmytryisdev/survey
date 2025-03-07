<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '../components/app/Sidebar.vue'

const route = useRoute()
const title = computed(() => {
  return route.meta.title
})

const isSidebarHidden = ref(true)

const toggleSidebarHidden = () => {
  isSidebarHidden.value = !isSidebarHidden.value;
};
</script>

<template>
  <div class="flex h-full">
    <button
      class="absolute t-2 l-2 z-0 sm:hidden"
      @click="toggleSidebarHidden"
    >Toggle</button>

    <Sidebar v-model="isSidebarHidden"/>

    <main class="w-full m-6">
      <h2 class="mb-10 text-3xl font-bold">{{ title }}</h2>

      <RouterView />
    </main>
  </div>

</template>

<style scoped>

</style>