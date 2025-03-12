<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import QuestionModal from '~/components/modal/Question.vue';
import QuestionModel from '~/models/Question';
import { API_BASE_URL } from '~/config';

const route = useRoute();

const showModal = ref(false);
const editingQuestion = ref<QuestionModel | null>(null);
const questions = ref<QuestionModel[]>([]);

const getQuestions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/polls/${route.params.id}/questions`)
    questions.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

const createQuestion = async () => {
  try {
    editingQuestion.value = null;
    showModal.value = true;
  } catch (error) {
    console.error(error);
  }
};

const editQuestion = (question: QuestionModel) => {
  editingQuestion.value = question;
  showModal.value = true;
};

const handleSaveQuestion = async (question: QuestionModel) => {
  let mode;
  if (question.id) {
    mode = 'edit';
    const index = questions.value.findIndex(q => q.id === question.id);
    if (index !== -1) {
      questions.value[index] = question;
    }
  } else {
    mode = 'create';
    question.id = Date.now().toString();
    questions.value.push(question);
  }

  const response = await fetch(`${API_BASE_URL}/polls/${route.params.id}/questions`, {
    method: mode === 'create' ? 'POST' : 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      poll: editingQuestion.value!.poll,
      answers: editingQuestion.value!.answers.map(item => item.text),
    }),
  })
  questions.value = await response.json();
};

onMounted(() => getQuestions());
</script>

<template>
  <div class="flex justify-between items-center p-3">
    <span class="font-bold">Вопрос</span>
    <button class="text-left font-bold cursor-pointer" @click="createQuestion">Добавить вопрос</button>
  </div>

  <ul>
    <li
      v-for="(question, index) in questions"
      :key="question.id"
      class="flex justify-between items-center p-3 border-b-2 border-b-gray-100"
    >
      <span>{{ index + 1 }}. {{ question.text }}</span>
      <button class="cursor-pointer" @click="editQuestion(question)">Редактировать</button>
    </li>
  </ul>
  <QuestionModal v-model="showModal" :question="editingQuestion" @save-question="handleSaveQuestion" />
</template>

<style scoped></style>
