<script setup lang="ts">
import { computed, } from 'vue'
import { useRoute } from 'vue-router'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button';

const isHidden = defineModel<boolean>({ default: true })

const route = useRoute()
const breakpoints = useBreakpoints(breakpointsTailwind)

const isMobile = breakpoints.smallerOrEqual("sm")
const sidebarClasses = computed(() => {
  return {
    isMobile: isMobile.value,
  }
})

const toggleHidden = () => {
  isHidden.value = !isHidden.value;
}

const items = [
  { label: 'Опросы', link: 'poll' },
  { label: 'Пользователи', link: 'users' },
  { label: 'Чёрный список', link: 'blacklist' }
]
</script>

<template>
  <Transition name="slide-left">
    <aside
      v-show="!isMobile || !isHidden"
      :class="sidebarClasses"
      class="sidebar h-full p-6 absolute inset-0 z-1 bg-white sm:w-96 sm:static sm:border-r-2 sm:border-r-gray-100"
    >
      <div class="sm:hidden">
        <Button
          variant="text"
          class="mb-8 sm:hidden"
          @click="toggleHidden"
        >
          Назад
        </Button>
      </div>
      <section class="sidebar-user flex gap-3 mb-11">
        <Avatar size="xlarge" />
        <div class="overflow-hidden">
          <p class="truncate font-bold">Иван Иванов</p>
          <p class="truncate font-normal">ivanov@mail.ru</p>
        </div>
      </section>

      <section class="sidebar-list flex flex-col gap-6">
        <RouterLink
          v-for="item in items"
          :to="{ name: item.link }"
          :class="{ 'bg-sky-100': item.link === route.name }"
          class="p-4 rounded-lg transition duration-100 ease-in-out hover:bg-sky-200"
          @click="toggleHidden"
        >
          {{ item.label }}
        </RouterLink>
      </section>
    </aside>
  </Transition>
</template>

<style scoped>

</style>