<script setup lang="ts">
import Button from 'primevue/button';
import { computed, onMounted, ref } from 'vue';
import LogicModal from '~/components/modal/Logic.vue'
import QuestionModel from '~/models/Question';
import AnswerModel from '~/models/Answer';
import Connection from '~/components/poll/logic/Connection.vue';
import { fetchLogicQuestions } from '~/api/Logic.ts';
import RelationshipModel from '~/models/Relationship';

const showModal = ref(false);
const questions = ref<QuestionModel[]>([]);

const filteredQuestions = computed<QuestionModel[]>(() => {
  return questions.value.filter(item => item.answers.find(answer => answer.nextQuestion));
});

const relationships = computed(() => {
  return questions.value
    .filter(item => item.answers.find(answer => answer.nextQuestion))
    .map(question => {
      const answer = question.answers.find(answer => answer.nextQuestion);
      return new RelationshipModel({
        question_id: question.id,
        answer_id: answer!.id,
        next_question_id: answer!.nextQuestion,
      })
    })
});

const getLogicQuestions = async () => {
  try {
    questions.value = await fetchLogicQuestions();
  } catch (error) {
    console.error(error);
  }
};

const handleChangeAnswer = (answer: AnswerModel, index: number) => {
  questions.value[index].answers = questions.value[index].answers.map(item => {
    item.nextQuestion = item.id === answer.id ? questions.value[index].subquestion!.id : null;
    return item;
  });
}

const handleChangeNextQuestion = (question: QuestionModel, index: number) => {
  questions.value[index].subquestion = question;
}

const createConnection = () => {
  showModal.value = true;
};

const handleCreateRelationship = (relationship: RelationshipModel) => {
  const question = questions.value.find(item => item.id === relationship.question_id)
  question!.answers = question!.answers.map(item => {
    return item.id === relationship.answer_id
      ? { ...item, nextQuestion: relationship.next_question_id }
      : { ...item, nextQuestion: null };
  })
}

const handleSavePoll = () => {
  try {
    console.log('Submitting', relationships)
  } catch (err) {
    console.error(err)
  }
}

onMounted( () => getLogicQuestions())
</script>

<template>
  <div class="flex flex-col gap-8">
    <Button variant="text" class="w-104" @click="createConnection">Добавить вопрос в последовательность</Button>

    <ul class="flex flex-col gap-8">
      <Connection
        v-for="(question, index) in filteredQuestions"
        :key="question.id"
        :questions
        :question
        :index
        @change-answer="answer => handleChangeAnswer(answer, index)"
        @change-next-question="q => handleChangeNextQuestion(q, index)"
      />
    </ul>

    <Button class="max-w-104" @click="handleSavePoll">Cохранить изменения</Button>
  </div>

  <LogicModal v-model="showModal" :questions @create-relationship="handleCreateRelationship"/>
</template>

<style scoped>

</style>