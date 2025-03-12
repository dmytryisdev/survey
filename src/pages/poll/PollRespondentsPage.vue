<script setup lang="ts">
import { ref } from 'vue';
import RespondentModal from '~/components/modal/Respondent.vue';
import RespondentModel from '~/models/Respondent';

const statusesText = {
  invited: 'Приглашен',
  started: 'Начал прохождение',
  completed: 'Завершил',
}

const showModal = ref(false);
const editingRespondent = ref<RespondentModel | null>(null);
const respondents = ref<RespondentModel[]>([
  new RespondentModel({ id: '1', fullName: 'Смирнов И.И.', email: 'smirnov@yandex.ru', status: 'invited'  }),
  new RespondentModel({ id: '2', fullName: 'Иванов И.А.', email: 'ivanovv@yandex.ru', status: 'started'  }),
  new RespondentModel({ id: '3', fullName: 'Александров Б.Ю.', email: 'alexndrv@yandex.ru', status: 'completed'  }),
]);

const createRespondent = () => {
  editingRespondent.value = null;
  showModal.value = true;
};

const handleAddRespondent = (respondent: RespondentModel) => {
  respondents.value.push(respondent);
};
</script>

<template>
  <div class="flex items-center p-3">
    <span class="flex-2 font-bold">ФИО</span>
    <span class="flex-2 font-bold">Email</span>
    <button class="flex-1 text-left font-bold cursor-pointer" @click="createRespondent">Добавить респондента</button>
  </div>

  <ul>
    <li
      v-for="respondent in respondents"
      :key="respondent.id"
      class="flex items-center p-3 border-b-2 border-b-gray-100"
    >
      <span class="flex-2 justify-center">{{ respondent.fullName }}</span>
      <span class="flex-2 justify-center">{{ respondent.email }}</span>
      <span class="flex-1 justify-center">{{ statusesText[respondent.status || 'invited'] }}</span>
    </li>
  </ul>

  <RespondentModal v-model="showModal" @add-respondent="handleAddRespondent" />
</template>

<style scoped></style>
