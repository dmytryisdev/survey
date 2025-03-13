<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { Form } from '@primevue/forms';
import Message from 'primevue/message';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import Button from 'primevue/button';
import PollModel from '~/models/Poll';
const route = useRoute()

const initialValues = reactive({
  name: '',
  description: '',
  category: { name: 'Опросы о работе', value: 'performance' },
  type: 'public',
  status: { name: 'Черновик', value: 'draft' }
})

const options = {
  category: [
    { name: 'Опросы о работе', value: 'performance' },
    { name: 'Опросы о качестве услуг', value: 'quality' },
    { name: 'Опросы об уровне обслуживания', value: 'service' }
  ],
  status: [
    { name: 'Черновик', value: 'draft' },
    { name: 'Активный', value: 'active' },
    { name: 'Завершённый', value: 'completed' }
  ]
}

const resolver = ({ values }: any) => {
  const errors: any = {};

  if (!values.name.trim()) {
    errors.name = [{ message: 'Поле обязательно для заполнения.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = async ({ valid, states }: { valid: boolean, states: any }) => {
  if (valid) {
    try {
      await PollModel.updatePoll(route.params.id as string, states.name.value);
    } catch (err) {
      console.error(err);
    }
  }
}
</script>

<template>
  <Form
    v-slot="$form"
    :initialValues
    :resolver
    :validateOnValueUpdate="false"
    :validateOnBlur="true"
    @submit="onFormSubmit"
    class="flex flex-col gap-4 max-w-96"
  >
    <div class="flex flex-col gap-1">
      <label for="name">Название опроса</label>
      <InputText name="name" type="text" id="name" fluid />
      <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
        {{ $form.name.error.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-1">
      <label for="description">Описание</label>
      <Textarea name="description" id="description" rows="3" :maxlength="150" fluid/>
    </div>

    <div class="flex flex-col gap-1">
      <label for="category">Категория</label>
      <Select name="category" id="category" :options="options.category" optionLabel="name" fluid />
    </div>

    <div class="flex flex-col gap-1">
      <label for="type">Категория</label>
      <RadioButtonGroup name="type" class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton inputId="anonymous" name="type" value="anonymous" />
          <label for="anonymous">Анонимный</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton inputId="public" name="type" value="public" />
          <label for="public">Публичный</label>
        </div>
      </RadioButtonGroup>
    </div>

    <div class="flex flex-col gap-1">
      <label for="status">Статус</label>
      <Select name="status" id="status" :options="options.status" optionLabel="name" fluid />
    </div>

    <Button type="submit" severity="secondary" label="Сохранить изменения" fluid/>
  </Form>
</template>

<style scoped></style>