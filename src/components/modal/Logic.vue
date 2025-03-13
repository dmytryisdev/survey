<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import RelationshipModel from '~/models/Relationship';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import QuestionModel from '~/models/Question';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import Message from 'primevue/message';

const showModal = defineModel<boolean>();

const { questions, filteredQuestions } = defineProps<{
  questions: QuestionModel[],
  filteredQuestions: QuestionModel[],
}>();

const emit = defineEmits<{ 'create-relationship': [relationship: RelationshipModel]; }>();

const selectedQuestion = ref();
const selectedAnswer = ref();
const selectedNextQuestion = ref();

const questionsOptions = computed(() => {
  return questions
    .filter(item => item.id !== selectedNextQuestion.value?.id)
    .filter(item => !filteredQuestions.includes(item))
    .map(item => { return { id: item.id, name: item.text, value: item.id, answers: item.answers } });
});

const questionsNextOptions = computed(() => {
  return questions
    .map(item => { return { id: item.id, name: item.text, value: item.id, answers: item.answers } })
    .filter(item => item.id !== selectedQuestion.value?.id);
});

const answersOptions = computed(() => questions.find(question => question.id === selectedQuestion.value.id)!)

const initialValues = reactive({
  question: null,
  answer: null,
  nextQuestion: null
})

const resolver = ({ values }: any) => {
  const errors: any = {};

  if (!values.question) {
    errors.question = [{ message: 'Поле обязательно для заполнения.' }];
  }

  if (!values.answer) {
    errors.answer = [{ message: 'Поле обязательно для заполнения.' }];
  }

  if (!values.nextQuestion) {
    errors.nextQuestion = [{ message: 'Поле обязательно для заполнения.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid, states }: FormSubmitEvent) => {
  if (valid) {
    try {
      closeDialog();
      emit('create-relationship', new RelationshipModel({
        question_id: states.question.value.id,
        answer_id: states.answer.value,
        next_question_id: states.nextQuestion.value.id,
      }));
      resetFields()
    } catch (err) {
      console.error(err);
    }
  }
}

const toggleRadioButton = (id: string) => {
  if (selectedAnswer.value === id) {
    selectedAnswer.value = null;
  }
}

const closeDialog = () => {
  showModal.value = false;
};

const resetFields = () => {
  selectedQuestion.value = null;
  selectedAnswer.value = null;
  selectedNextQuestion.value = null;
}
</script>

<template>
  <Dialog
    v-model:visible="showModal"
    :modal="true"
    :style="{ width: '500px' }"
    :closable="false"
    header="Добавление связи"
  >
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      :validateOnValueUpdate="false"
      @submit="onFormSubmit"
      class="flex flex-col gap-4"
    >
      <div class="flex flex-col gap-2">
        <label for="question">Выберите вопрос, который вы хотите добавить</label>
        <Select
          v-model="selectedQuestion"
          :options="questionsOptions"
          name="question"
          optionLabel="name"
          fluid
        />
        <Message v-if="$form.question?.invalid" severity="error" size="small" variant="simple">
          {{ $form.question.error.message }}
        </Message>
      </div>

      <div v-if="selectedQuestion" class="flex flex-col gap-2">
        <label for="answer">Следующим для ответа показывать</label>
        <RadioButtonGroup name="answer" class="flex flex-wrap gap-4">
          <div v-for="answer in answersOptions.answers" class="flex items-center gap-2">
            <RadioButton
              v-model="selectedAnswer"
              :inputId="'modal' + String(answer.id)"
              :name="String(answersOptions.id)"
              :value="answer.id"
              @click="toggleRadioButton(answer.id)"
            />
            <label :for="'modal' + answer.id">{{ answer.text }}</label>
          </div>
        </RadioButtonGroup>
        <Message v-if="$form.answer?.invalid" severity="error" size="small" variant="simple">
          {{ $form.answer.error.message }}
        </Message>
      </div>

      <div class="flex flex-col gap-2">
        <Select
          v-model="selectedNextQuestion"
          :options="questionsNextOptions"
          name="nextQuestion"
          optionLabel="name"
          fluid
        />
        <Message v-if="$form.nextQuestion?.invalid" severity="error" size="small" variant="simple">
          {{ $form.nextQuestion.error.message }}
        </Message>
      </div>


      <div class="flex gap-2">
        <Button type="submit" severity="secondary" label="Сохранить" class="flex-1" />
        <Button
          type="reset"
          variant="outlined"
          severity="secondary"
          label="Отменить"
          class="flex-1"
          @click="closeDialog"
        />
      </div>
    </Form>
  </Dialog>
</template>

<style scoped></style>
