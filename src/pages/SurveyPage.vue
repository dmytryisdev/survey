<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { fetchQuestionnaire } from '~/api/Questionnaire';
import QuestionnaireModel from '~/models/QuestionaryModel';
const router = useRouter();

const list = ref<QuestionnaireModel[]>([]);

const getQuestions = async () => {
  try {
    list.value = await fetchQuestionnaire();
  } catch (error) {
    console.error(error);
  }
};

const handleRemove = (id: string) => {
  list.value = list.value.filter(item => item.id !== id);
};

onMounted(() => getQuestions());
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item.id" class="border-b-2 border-b-gray-100">
      <RouterLink
        :to="{ name: 'survey-parameters', params: { id: item.id } }"
        class="flex items-center justify-between p-3"
      >
        <span>{{ item.title }}</span>
        <div class="flex items-center justify-between gap-4">
          <button
            class="cursor-pointer"
            @click.prevent="router.push({ name: 'survey-parameters', params: { id: item.id } })"
          >
            Редактировать
          </button>
          <button class="cursor-pointer" @click.prevent="handleRemove(item.id)">Удалить</button>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
