<script setup lang="ts">
import { ref } from 'vue'

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
  list.value = list.value.filter((item) => item.id !== id)
}
</script>

<template>
  <div>
    <h2 class="mb-10 text-3xl font-bold">Опросы</h2>
  </div>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
      class="flex items-center justify-between p-3 border-b-2 border-b-gray-100"
    >
      <span>{{ item.name }}</span>
      <div class="flex items-center justify-between gap-4">
        <span>Редактировать</span>
        <button @click="() => handleRemove(item.id)">Удалить</button>
      </div>
    </li>
  </ul>

</template>



<style scoped>

</style>