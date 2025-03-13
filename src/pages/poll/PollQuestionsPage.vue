<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import QuestionModal from '~/components/modal/Question.vue';
import QuestionModel from '~/models/Question';
import Loader from '~/components/app/Loader.vue';
import Empty from '~/components/app/Empty.vue';

const route = useRoute();

const isLoading = ref(true);
const showModal = ref(false);
const editingQuestion = ref<QuestionModel | null>(null);
const questions = ref<QuestionModel[]>([]);

const getQuestions = async () => {
  try {
    questions.value = await QuestionModel.getQuestions(route.params.id as string);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const createQuestion = () => {
  editingQuestion.value = null;
  showModal.value = true;
};

const editQuestion = (question: QuestionModel) => {
  editingQuestion.value = question;
  showModal.value = true;
};

const handleSaveQuestion = async (question: QuestionModel) => {
  try {
    const fetchedQuestion = await QuestionModel.saveQuestion(question, route.params.id as string);
    if (question.id) {
      questions.value.map(item => item.id === question.id ? fetchedQuestion : item)
    } else {
      questions.value.push(fetchedQuestion);
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => { getQuestions(); });
</script>

<template>
  <div class="flex justify-between items-center p-3">
    <span class="font-bold">Вопрос</span>
    <button class="text-left font-bold cursor-pointer" @click="createQuestion">Добавить вопрос</button>
  </div>

  <Loader v-if="isLoading"/>
  <Empty v-else-if="!questions.length"/>

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