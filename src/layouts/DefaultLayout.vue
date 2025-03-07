<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '../components/app/Sidebar.vue'

const isSidebarHidden = ref(true)

const toggleSidebarHidden = () => {
  isSidebarHidden.value = !isSidebarHidden.value;
};
</script>

<template>
  <div class="flex h-full">
    <button
      @click="toggleSidebarHidden"
      class="absolute t-2 l-2 z-0 sm:hidden"
    >Toggle</button>

    <Sidebar v-model="isSidebarHidden"/>

    <main class="w-full m-6">
      <RouterView />
    </main>
  </div>

</template>

<style scoped>

</style>