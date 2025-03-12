<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import PollModel from '~/models/Poll';
import PollModal from '~/components/modal/Poll.vue';
import { API_BASE_URL } from '~/config';
const router = useRouter();

const showModal = ref(false);
const list = ref<PollModel[]>([]);

const getPolls = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/polls`)
    list.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

const handleRemove = async (id: string) => {
  try {
    await fetch(`${API_BASE_URL}/polls/${id}`, {
      method: 'DELETE',
    })
    list.value = list.value.filter(item => item.id !== id);
  } catch (err) {
    console.error(err);
  }
};

const createPoll = () => {
  showModal.value = true;
}

const handleCreatePoll = async (poll: PollModel) => {
  try {
    const response = await fetch(`${API_BASE_URL}/polls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: poll.title
      }),
    })
    list.value = await response.json();
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => getPolls());
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
