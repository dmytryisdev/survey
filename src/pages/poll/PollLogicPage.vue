<script setup lang="ts">
import Button from 'primevue/button';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LogicModal from '~/components/modal/Logic.vue'
import QuestionModel from '~/models/Question';
import AnswerModel from '~/models/Answer';
import Connection from '~/components/poll/logic/Connection.vue';
import RelationshipModel from '~/models/Relationship';
import Empty from '~/components/app/Empty.vue';
import Loader from '~/components/app/Loader.vue';
const route = useRoute();

const isLoading = ref(true);
const showModal = ref(false);
const questions = ref<QuestionModel[]>([]);

const filteredQuestions = computed<QuestionModel[]>(() => {
  return questions.value.filter(item => item.answers.find(answer => answer.nextQuestion));
});

const getLogicQuestions = async () => {
  try {
    questions.value = await QuestionModel.getQuestions(route.params.id as string);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const handleChangeAnswer = (answer: AnswerModel, questionId: string) => {
  const question = questions.value.find(item => item.id === questionId)!
  const nextQuestion = question
    .answers.find(item => item.nextQuestion)!
    .nextQuestion;
  question.answers = question.answers.map(item => {
    item.nextQuestion = item.id === answer.id ? nextQuestion : null;
    return item;
  });
};

const handleChangeNextQuestion = (nextQuestion: QuestionModel, questionId: string) => {
  const question = questions.value.find(item => item.id === questionId)!
  const answer = question.answers.find(item => item.nextQuestion)
  question.answers.map(item => item.id === answer!.id
    ? { ...item, nextQuestion: nextQuestion }
    : { ...item, nextQuestion: null }
  );
};

const createConnection = () => {
  showModal.value = true;
};

const handleCreateRelationship = (relationship: RelationshipModel) => {
  const question = questions.value.find(item => item.id === relationship.question_id)
  question!.answers = question!.answers.map(item => {
    return item.id === relationship.answer_id
      ? { ...item, nextQuestion: questions.value.find(item => item.id === relationship.next_question_id)! }
      : { ...item, nextQuestion: null };
  })
}

const handleSavePoll = async () => {
  try {
    const relationships = questions.value
      .filter(item => item.answers.find(answer => answer.nextQuestion))
      .map(question => {
        const answer = question.answers.find(answer => answer.nextQuestion);
        return new RelationshipModel({
          question_id: question.id,
          answer_id: answer!.id,
          next_question_id: answer!.nextQuestion!.id,
        });
      });

    await RelationshipModel.updateRelationships(route.params.id as string, relationships)
  } catch (err) {
    console.error(err);
  }
}

onMounted( () => getLogicQuestions())
</script>

<template>
  <Loader v-if="isLoading"/>

  <div v-else class="flex flex-col gap-8">
    <Button variant="text" class="w-104" @click="createConnection">Добавить вопрос в последовательность</Button>

    <ul class="flex flex-col gap-8">
      <Connection
        v-for="(question, index) in filteredQuestions"
        :key="question.id"
        :questions
        :question
        :index
        @change-answer="(answer, questionId) => handleChangeAnswer(answer, questionId)"
        @change-next-question="(question, questionId: string) => handleChangeNextQuestion(question, questionId)"
      />
    </ul>

    <Empty v-if="!filteredQuestions.length"/>

    <Button class="max-w-104" @click="handleSavePoll">Cохранить изменения</Button>
  </div>

  <LogicModal v-model="showModal" :questions :filteredQuestions @create-relationship="handleCreateRelationship"/>
</template>

<style scoped>

</style>