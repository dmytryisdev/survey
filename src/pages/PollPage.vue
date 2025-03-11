<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { fetchPoll } from '~/api/Poll';
import PollModel from '~/models/Poll';
import PollModal from '~/components/modal/Poll.vue';
const router = useRouter();

const showModal = ref(false);
const list = ref<PollModel[]>([]);

const getQuestions = async () => {
  try {
    list.value = await fetchPoll();
  } catch (error) {
    console.error(error);
  }
};

const handleRemove = (id: string) => {
  list.value = list.value.filter(item => item.id !== id);
};

const createPoll = () => {
  showModal.value = true;
}

const handleCreatePoll = (poll: PollModel) => {
  list.value.push(poll);
}

onMounted(() => getQuestions());
</script>

<template>
  <div class="flex justify-between w-full items-center p-3">
    <span class="font-bold">ФИО</span>
    <button class="cursor-pointer font-bold" @click="createPoll">Добавить опрос</button>
  </div>

  <ul>
    <li v-for="item in list" :key="item.id" class="border-b-2 border-b-gray-100">
      <RouterLink
        :to="{ name: 'poll-parameters', params: { id: item.id } }"
        class="flex items-center justify-between p-3"
      >
        <span>{{ item.title }}</span>
        <div class="flex items-center justify-between gap-4">
          <button
            class="cursor-pointer"
            @click.prevent="router.push({ name: 'poll-parameters', params: { id: item.id } })"
          >
            Редактировать
          </button>
          <button class="cursor-pointer" @click.prevent="handleRemove(item.id)">Удалить</button>
        </div>
      </RouterLink>
    </li>
  </ul>

  <PollModal v-model="showModal" @create-poll="handleCreatePoll"/>
</template>

<style scoped></style>
