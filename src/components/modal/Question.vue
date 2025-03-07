<template>
  <Dialog
    v-model:visible="dialogVisible"
    :modal="true"
    :header="isEditMode ? 'Редактирование вопроса' : 'Создание вопроса'"
    :style="{ width: '500px' }"
    :closable="false"
    @after-hide="onDialogHidden"
  >
    <form @submit.prevent="handleSubmit" class="p-fluid">
      <div class="field mb-3 flex=col">
        <label for="question-text" class="font-bold">Введите текст вопроса</label>
        <div class="p-inputgroup flex gap-2">
          <InputText 
            id="question-text" 
            v-model="form.text" 
            class="w-full" 
            :class="{'p-invalid': !form.text.trim() && errorMessage}" 
            :feedback="true"
            placeholder="Введите текст вопроса" 
          />
          <Button icon="pi pi-plus" @click="addAnswer" />
        </div>
      </div>

      <TransitionGroup name="list" tag="div" class="answer-list">
        <div v-for="(_, index) in form.answers" :key="`answer-${index}`" class="field mb-2 answer-item">
          <div class="p-inputgroup">
            <div class="p-inputgroup flex gap-2">
              <InputText 
                v-model="form.answers[index].text" 
                class="w-full" 
                :class="{'p-invalid': !form.answers[index].text.trim() && errorMessage}" 
                :feedback="true"
                placeholder="Вариант ответа" 
              />
              <Button icon="pi pi-trash" class="p-button-danger" @click="removeAnswer(index)" />
            </div>
          </div>
        </div>
      </TransitionGroup>

      
      <div v-if="errorMessage" class="error-message mb-3">{{ errorMessage }}</div>
    </form>

    <template #footer>
      <div class="flex justify-content-between">
        <Button
          type="button"
          :label="isEditMode ? 'Сохранить изменения' : 'Сохранить вопрос'"
          icon="pi pi-check"
          @click="handleSubmit"
          class="p-button-primary"
        />
        <Button type="button" label="Отмена" icon="pi pi-times" @click="closeDialog" class="p-button-text" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import QuestionModel from '~/models/Question';
import AnswerModel from '~/models/Answer';

interface FormData {
  id: string | null;
  text: string;
  answers: AnswerModel[];
}

interface QuestionModelProps {
  modelValue: boolean;
  question: QuestionModel | null;
}

const { modelValue = false, question = new QuestionModel() } = defineProps<QuestionModelProps>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'save-question': [question: QuestionModel];
}>();

const defaultForm: FormData = {
  id: null,
  text: '',
  answers: [new AnswerModel({ text: 'Да' }), new AnswerModel({ text: 'Нет' }), new AnswerModel({ text: 'Не знаю' })],
};

const form = reactive<FormData>({
  id: null,
  text: '',
  answers: [...defaultForm.answers],
});

const errorMessage = ref('');

const dialogVisible = computed({
  get: () => modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});

const isEditMode = computed(() => !!form.id);

const initForm = async () => {
  if (question) {
    form.id = question.id;
    form.text = question.text;
    form.answers = question.answers && question.answers.length > 0 ? [...question.answers] : [...defaultForm.answers];
  } else {
    resetForm();
  }
};

const resetForm = () => {
  form.id = null;
  form.text = '';
  form.answers = [...defaultForm.answers];
  errorMessage.value = '';
};

const addAnswer = () => {
  form.answers.push(new AnswerModel());
};

const removeAnswer = (index: number) => {
  form.answers.splice(index, 1);
};

const handleSubmit = () => {
  if (!form.text.trim()) {
    errorMessage.value = 'Текст вопроса не может быть пустым.';
    return;
  }

  const emptyAnswer = form.answers.some(answer => !answer.text.trim());
  if (emptyAnswer) {
    errorMessage.value = 'Все варианты ответов должны быть заполнены.';
    return;
  }

  errorMessage.value = '';

  const questionData: Partial<QuestionModel> = {
    text: form.text,
    answers: form.answers,
  };

  if (isEditMode.value && form.id) {
    questionData.id = form.id;
  }

  const questionModel = new QuestionModel(questionData);

  emit('save-question', questionModel);
  closeDialog();
};

const closeDialog = () => {
  dialogVisible.value = false;
};

const onDialogHidden = () => {
  resetForm();
};

watch(
  () => modelValue,
  isOpen => {
    if (isOpen) {
      initForm();
    }
  }
);

watch(
  () => question,
  () => {
    if (dialogVisible.value) {
      initForm();
    }
  },
  { deep: true }
);
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
}

/* Анимация списка */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.answer-list {
  position: relative;
}

.answer-item {
  transition: all 0.3s ease;
}

.error-message {
  color: red;
}
</style>
