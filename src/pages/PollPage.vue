<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import PollModel from '~/models/Poll';
import PollModal from '~/components/modal/Poll.vue';
import Loader from '~/components/app/Loader.vue';
import Empty from '~/components/app/Empty.vue';
const router = useRouter();

const isLoading = ref(true);
const showModal = ref(false);
const list = ref<PollModel[]>([]);

const getPolls = async () => {
  try {
    list.value = await PollModel.getPolls();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const handleRemove = async (id: string) => {
  try {
    await PollModel.removePoll(id)
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
    const fetchedPoll = await PollModel.createPoll(poll.title)
    list.value.push(fetchedPoll);
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

  <Loader v-if="isLoading"/>
  <Empty v-else-if="!list.length"/>

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
