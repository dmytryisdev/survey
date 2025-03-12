<script setup lang="ts">
import { computed, ref } from 'vue';
import type AnswerModel from '~/models/Answer';
import QuestionModel from '~/models/Question';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import RelationshipModel from '~/models/Relationship';

interface ConnectionProps {
  question: QuestionModel;
  questions: QuestionModel[];
  index: number;
}

const { question, questions, index } = defineProps<ConnectionProps>();

const emit = defineEmits<{
  'change-answer': [answer: AnswerModel];
  'change-next-question': [question: QuestionModel];
}>()

const selectedAnswer = ref(question.answers.find(item => item.nextQuestion)?.id);
const selectedNextQuestion = ref({ id: question.subquestion!.id, name: question.subquestion!.text, value: question.subquestion!.id })

const questionsOptions = computed(() => {
  return questions
    .map(item => { return { id: item.id, name: item.text, value: item.id } })
    .filter(item => item.id !== question.id)
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
    <span>{{ index + 1 }}. {{ question.text }}</span>

    <div class="flex flex-wrap gap-4">
      <div v-for="answer in question.answers" class="flex items-center gap-2">
        <RadioButton
          v-model="selectedAnswer"
          :inputId="answer.id"
          :name="question.id"
          :value="answer.id"
          @change="changeAnswer(answer)"
        ></RadioButton>
        <label :for="answer.id">{{ answer.text }}</label>
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