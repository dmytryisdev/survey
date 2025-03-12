<script setup lang="ts">
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import Message from 'primevue/message';
import PollModel from '~/models/Poll';

const showModal = defineModel<boolean>();

const emit = defineEmits<{ 'create-poll': [poll: PollModel]; }>();

const initialValues = reactive({
  title: '',
})

const resolver = ({ values }: any) => {
  const errors: any = {};

  if (!values.title.trim()) {
    errors.title = [{ message: 'Поле обязательно для заполнения.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid, states }: FormSubmitEvent) => {
  if (valid) {
    try {
      closeDialog();
      emit('create-poll', new PollModel({
        id: Date.now().toString(),
        title: states.title.value,
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
    header="Добавить опрос"
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
        <label for="title">Введите название опроса</label>
        <InputText name="title" type="text" id="title" fluid />
        <Message v-if="$form.title?.invalid" severity="error" size="small" variant="simple">
          {{ $form.title.error.message }}
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
