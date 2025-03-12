<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '~/components/app/Sidebar.vue'
import Button from 'primevue/button'

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
  <div class="sm:hidden">
    <Button
      variant="text"
      class="mt-6 ml-6"
      @click="toggleSidebarHidden"
    >
      Меню
    </Button>
  </div>


  <div class="flex h-full">
    <Sidebar v-model="isSidebarHidden"/>

    <main class="w-full m-6">
      <h2 class="mb-10 text-3xl font-bold">{{ title }}</h2>

      <RouterView />
    </main>
  </div>

</template>

<style scoped>

</style>