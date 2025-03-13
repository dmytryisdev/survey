<script setup lang="ts">
import { computed, ref } from 'vue';
import type AnswerModel from '~/models/Answer';
import QuestionModel from '~/models/Question';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';

interface ConnectionProps {
  question: QuestionModel;
  questions: QuestionModel[];
  index: number;
}

const { question, questions, index } = defineProps<ConnectionProps>();

const emit = defineEmits<{
  'change-answer': [answer: AnswerModel, questionId: string];
  'change-next-question': [question: QuestionModel, questionId: string];
}>()

const selectedAnswer = ref(question.answers.find(item => item.nextQuestion)?.id);
const selectedNextQuestion = ref({
  id: question.answers.find(item => item.nextQuestion)!.nextQuestion!.id,
  name: question.answers.find(item => item.nextQuestion)!.nextQuestion!.text,
  value: question.answers.find(item => item.nextQuestion)!.nextQuestion!.id
})

const questionsOptions = computed(() => {
  return questions
    .map(item => { return { id: item.id, name: item.text, value: item.id } })
    .filter(item => item.id !== question.id)
});

const changeAnswer = (answer: AnswerModel, questionId: string) => {
  emit('change-answer', answer, questionId);
};

const changeNextQuestion = (nextQuestionId: string, questionId: string) => {
  const question = questions.find(q => q.id === nextQuestionId)
  emit('change-next-question', question!, questionId);
};
</script>

<template>
  <li class="flex flex-col gap-4">
    <span>{{ index + 1 }}. {{ question.text }}</span>

    <div class="flex flex-wrap gap-4">
      <div v-for="answer in question.answers" class="flex items-center gap-2">
        <RadioButton
          v-model="selectedAnswer"
          :inputId="String(answer.id)"
          :name="String(question.id)"
          :value="answer.id"
          @change="changeAnswer(answer, question.id)"
        ></RadioButton>
        <label :for="answer.id">{{ answer.text }}</label>
      </div>
    </div>

    <Select
      v-model="selectedNextQuestion"
      :options="questionsOptions"
      optionLabel="name"
      class="w-104"
      @change="(e)=> changeNextQuestion(e.value.value, question.id)"
    />
  </li>
</template>

<style scoped>

</style>