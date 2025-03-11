<script setup lang="ts">
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import Message from 'primevue/message';
import ConnectionModel from '~/models/Connection';
import { validateEmail } from '~/utils';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const showModal = defineModel<boolean>();

const emit = defineEmits<{ 'add-connection': [connection: ConnectionModel]; }>();

const initialValues = reactive({
  fullName: '',
  email: '',
})

const resolver = ({ values }: any) => {
  const errors: any = {};

  if (!values.fullName.trim()) {
    errors.fullName = [{ message: 'Поле обязательно для заполнения.' }];
  }

  if (!values.email.trim()) {
    errors.email = [{ message: 'Поле обязательно для заполнения.' }];
  }

  if (values.email.trim() && !validateEmail(values.email)) {
    errors.email = [{ message: 'Некорректный адрес электронной почты.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid, states }: FormSubmitEvent) => {
  if (valid) {
    try {
      closeDialog();
      emit('add-connection', new ConnectionModel({
        id: Date.now().toString(),
      }));
    } catch (err) {
      console.error(err);
    }
  }
}

const closeDialog = () => {
  showModal.value = false;
};
</script>

<template>
  <Dialog
    v-model:visible="showModal"
    :modal="true"
    :style="{ width: '500px' }"
    :closable="false"
    header="Выберите вопрос, который вы хотите добавить"
  >
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      :validateOnValueUpdate="false"
      :validateOnBlur="true"
      @submit="onFormSubmit"
      class="flex flex-col gap-4"
    >
      <Select
        :options="questionsOptions"
        optionLabel="name"
        class="w-104"
        @change="(e)=> changeNextQuestion(e.value.value)"
      />


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
        :options="questionsOptions"
        optionLabel="name"
        class="w-104"
        @change="(e)=> changeNextQuestion(e.value.value)"
      />

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
