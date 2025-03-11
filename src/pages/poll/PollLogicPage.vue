<script setup lang="ts">
import Button from 'primevue/button';
import { ref } from 'vue';
import LogicModal from '~/components/modal/Logic.vue'
import QuestionModel from '~/models/Question';
import AnswerModel from '~/models/Answer';
import ConnectionModel from '~/models/Connection';
import Connection from '~/components/poll/logic/Connection.vue';

const showModal = ref(false);
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
  new QuestionModel({
    id: '2',
    text: 'Как часто вы пользуетесь нашим продуктом?',
    answers: [
      new AnswerModel({ id: '1', text: 'Ежедневно' }),
      new AnswerModel({ id: '2', text: 'Несколько раз в неделю' }),
      new AnswerModel({ id: '3', text: 'Редко' }),
    ],
  }),
  new QuestionModel({
    id: '3',
    text: 'Как часто вы пользуетесь нашим продуктом?',
    answers: [
      new AnswerModel({ id: '1', text: 'Ежедневно' }),
      new AnswerModel({ id: '2', text: 'Несколько раз в неделю' }),
      new AnswerModel({ id: '3', text: 'Редко' }),
    ],
  }),
]);

const connections = ref<ConnectionModel[]>([
  new ConnectionModel({
    id: Date.now().toString(),
    question: questions.value[0],
    answer: new AnswerModel({ id: '1', text: 'Ежедневно' }),
    nextQuestion: questions.value[1],
  })
]);

const handleChangeAnswer = (answer: AnswerModel, index: number) => {
  connections.value[index].answer = answer;
}

const handleChangeNextQuestion = (question: QuestionModel, index: number) => {
  connections.value[index].nextQuestion = question;
}

const createConnection = () => {
  showModal.value = true;
};
</script>

<template>
  <Button variant="text" @click="createConnection">Добавить вопрос в последовательность</Button>

  <ul>
    <Connection
      v-for="(connection, index) in connections"
      :key="connection.id"
      :questions
      :connection
      :index
      @change-answer="answer => handleChangeAnswer(answer, index)"
      @change-next-question="question => handleChangeNextQuestion(question, index)"
    />
  </ul>

  <LogicModal v-model="showModal" @add-connection="() => {  }"/>
</template>

<style scoped>

</style>