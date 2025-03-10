<script setup lang="ts">
import { ref } from 'vue';
import QuestionModal from '~/components/modal/Question.vue';
import AnswerModel from '~/models/Answer';
import QuestionModel from '~/models/Question';

const showModal = ref(false);
const editingQuestion = ref<QuestionModel | null>(null);
const questions = ref<QuestionModel[]>([
  new QuestionModel({
    id: '1',
    text: 'Как часто вы пользуетесь нашим продуктом?',
    answers: [
      new AnswerModel({ id: '1', text: 'Ежедневно' }),
      new AnswerModel({ id: '2', text: 'Несколько раз в неделю' }),
      new AnswerModel({ id: '3', text: 'Редко' }),
    ],
  }),
]);

const createQuestion = () => {
  editingQuestion.value = null;
  showModal.value = true;
};

const editQuestion = (question: QuestionModel) => {
  editingQuestion.value = question;
  showModal.value = true;
};

const handleSaveQuestion = (question: QuestionModel) => {
  if (question.id) {
    const index = questions.value.findIndex(q => q.id === question.id);
    if (index !== -1) {
      questions.value[index] = question;
    }
  } else {
    question.id = Date.now().toString();
    questions.value.push(question);
  }
};
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
