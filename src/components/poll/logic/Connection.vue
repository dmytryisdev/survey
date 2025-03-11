<script setup lang="ts">
import { computed, ref } from 'vue';
import type ConnectionModel from '~/models/Connection';
import type AnswerModel from '~/models/Answer';
import QuestionModel from '~/models/Question';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';

interface ConnectionProps {
  connection: ConnectionModel;
  index: number;
  questions: QuestionModel[];
}

const { connection, index, questions } = defineProps<ConnectionProps>();

const emit = defineEmits<{
  'change-answer': [answer: AnswerModel];
  'change-next-question': [question: QuestionModel];
}>()

const selectedAnswer = ref();
const selectedNextQuestion = ref()

const questionsOptions = computed(() => {
  return questions.map(question => { return { name: question.text, value: question.id } })
});

const changeAnswer = (answer: AnswerModel) => {
  emit('change-answer', answer);
};

const changeNextQuestion = (questionId: string) => {
  const question = questions.find(q => q.id === questionId)
  emit('change-next-question', question!);
};
</script>

<template>
  <li class="flex flex-col gap-4">
    <span>{{ index + 1 }}. {{ connection.question.text }}</span>

    <div class="flex flex-wrap gap-4">
      <div v-for="answer in connection.question.answers" class="flex items-center gap-2">
        <RadioButton
          v-model="selectedAnswer"
          :inputId="answer.id"
          :name="connection.id"
          :value="answer.id"
          @change="changeAnswer(answer)"
        />
        <label :for="connection.id">{{ answer.text }}</label>
      </div>
    </div>

    <Select
      v-model="selectedNextQuestion"
      :options="questionsOptions"
      optionLabel="name"
      class="w-104"
      @change="(e)=> changeNextQuestion(e.value.value)"
    />
  </li>
</template>

<style scoped>

</style>