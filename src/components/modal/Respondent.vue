<script setup lang="ts">
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import Message from 'primevue/message';
import RespondentModel from '~/models/Respondent';
import { validateEmail } from '~/utils';

const showModal = defineModel<boolean>();

const emit = defineEmits<{ 'add-respondent': [respondent: RespondentModel]; }>();

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
      emit('add-respondent', new RespondentModel({
        id: Date.now().toString(),
        fullName: states.fullName.value,
        email: states.email.value,
        status: 'invited'
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
    header="Добавить респондента"
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
      <div class="flex flex-col gap-1">
        <label for="fullName">Укажите ФИО пользователя</label>
        <InputText name="fullName" type="text" id="fullName" fluid />
        <Message v-if="$form.fullName?.invalid" severity="error" size="small" variant="simple">
          {{ $form.fullName.error.message }}
        </Message>
      </div>

      <div class="flex flex-col gap-1">
        <label for="email">Укажите почту пользователя</label>
        <InputText name="email" type="text" id="email" fluid />
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
          {{ $form.email.error.message }}
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
