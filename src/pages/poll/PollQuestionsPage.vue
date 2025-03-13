<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import QuestionModal from '~/components/modal/Question.vue';
import QuestionModel from '~/models/Question';
import Loader from '~/components/app/Loader.vue';
import Empty from '~/components/app/Empty.vue';
import AnswerModel from '~/models/Answer';

const route = useRoute();

const isLoading = ref(true);
const showModal = ref(false);
const answersToDelete = ref<string[]>([]);
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
    if (answersToDelete.value.length) {
      await AnswerModel.deleteAnswers(answersToDelete.value);
    }
    const fetchedQuestion = await QuestionModel.saveQuestion(question, route.params.id as string);
    if (question.id) {
      questions.value.map(item => item.id === question.id ? fetchedQuestion : item)
    } else {
      questions.value.push(fetchedQuestion);
    }
  } catch (error) {
    console.error(error);
  } finally {
    answersToDelete.value = [];
  }
};

const handleDeleteQuestion = async (question: QuestionModel) => {
  try {
    await QuestionModel.deleteQuestion(question);
    questions.value = questions.value.filter(item => item.id !== question.id)
  } catch (error) {
    console.error(error);
  }
};

const handleAddToDelete = async (id: string) => {
  if (answersToDelete.value) {
    answersToDelete.value.push(id);
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
      <div class="flex items-center gap-2">
        <button class="cursor-pointer" @click="editQuestion(question)">Редактировать</button>
        <button class="cursor-pointer" @click="handleDeleteQuestion(question)">Удалить</button>
      </div>
    </li>
  </ul>

  <QuestionModal
    v-model="showModal"
    :question="editingQuestion"
    @add-to-delete="handleAddToDelete"
    @save-question="handleSaveQuestion"
  />
</template>

<style scoped></style>