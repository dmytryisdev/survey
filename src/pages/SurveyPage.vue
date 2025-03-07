<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const list = ref([
  { id: 123, name: 'Название опроса' },
  { id: 124, name: 'Название опроса' },
  { id: 125, name: 'Название опроса' },
  { id: 126, name: 'Название опроса' },
  { id: 127, name: 'Название опроса' },
  { id: 128, name: 'Название опроса' },
  { id: 129, name: 'Название опроса' },
  { id: 130, name: 'Название опроса' },
])

const handleRemove = (id: number) => {
  list.value = list.value.filter(item => item.id !== id)
}
</script>

<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
      class="border-b-2 border-b-gray-100"
    >
      <RouterLink
        :to="{ name: 'survey-parameters', params: { id: item.id } }"
        class="flex items-center justify-between p-3"
      >
        <span>{{ item.name }}</span>
        <div class="flex items-center justify-between gap-4">
          <button
            class="cursor-pointer"
            @click.prevent="router.push({ name: 'survey-parameters', params: { id: item.id } })"
          >Редактировать</button>
          <button
            class="cursor-pointer"
            @click.prevent="handleRemove(item.id)"
          >Удалить</button>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>