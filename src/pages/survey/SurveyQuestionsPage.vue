<script setup lang="ts">
import { ref } from 'vue'

const questions = ref([
  { id: 1, text: 'Question 1' },
  { id: 2, text: 'Question 2' },
  { id: 3, text: 'Question 3' },
  { id: 4, text: 'Question 4' },
  { id: 5, text: 'Question 5' },
])
</script>

<template>
  <ul>
    <li
      v-for="(question, index) in questions"
      :key="question.id"
      class="flex justify-between items-center p-3 border-b-2 border-b-gray-100"
    >
      <span>{{ index + 1 }}. {{ question.text }}</span>
      <button>Редактировать</button>
    </li>
  </ul>
</template>

<style scoped>

</style>