<script setup lang="ts">
import { reactive } from 'vue';
import { Form } from '@primevue/forms';
import Message from 'primevue/message';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import Button from 'primevue/button';

const initialValues = reactive({
  type: '',
  attempts: null,
  duration: null
})

const resolver = ({ values }: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = [{ message: 'Поле обязательно для заполнения.' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid, states }: { valid: boolean, states: any }) => {
  if (valid) {
    console.log('Submitting', states);
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
      <label for="type">Тип опроса</label>
      <RadioButtonGroup name="type" class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton inputId="all" name="type" value="all" />
          <label for="all">Для всех</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton inputId="group" name="type" value="group" />
          <label for="group">Для группы людей</label>
        </div>
      </RadioButtonGroup>
    </div>

    <div class="flex flex-col gap-1">
      <label for="attempts">Количество попыток для одного пользователя</label>
      <InputNumber name="attempts" id="attempts" fluid />
      <Message v-if="$form.attempts?.invalid" severity="error" size="small" variant="simple">
        {{ $form.attempts.error.message }}
      </Message>
    </div>

    <div class="flex flex-col gap-1">
      <label for="duration">Ограничение по времени на прохождение</label>
      <InputNumber name="duration" id="duration" fluid />
      <Message v-if="$form.attempts?.invalid" severity="error" size="small" variant="simple">
        {{ $form.attempts.error.message }}
      </Message>
    </div>

    <Button type="submit" severity="secondary" label="Сохранить изменения" fluid/>
  </Form>
</template>

<style scoped></style>