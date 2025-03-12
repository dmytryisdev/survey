<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type UserModel from '~/models/User';
import { fetchUsers } from '~/api/Users.ts';
import Loader from '~/components/app/Loader.vue';
import Empty from '~/components/app/Empty.vue';

const isLoading = ref(true)
const list = ref<UserModel[]>([])

const getBannedUsers = async () => {
  try {
    list.value = await fetchUsers(true);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const unbanUser = (id: UserModel['id']) => {
  list.value = list.value.filter(item => item.id !== id);
}

onMounted(() => getBannedUsers());
</script>

<template>
  <div class="flex items-center p-3">
    <span class="flex-2 font-bold">ФИО</span>
    <span class="flex-2 font-bold">Email</span>
    <span class="flex-1"></span>
  </div>

  <Loader v-if="isLoading"/>
  <Empty v-else-if="!list.length"/>

  <ul>
    <li
      v-for="item in list"
      :key="item.id"
      class="flex items-center p-3 border-b-2 border-b-gray-100"
    >
      <span class="flex-2">{{ item.fullName }}</span>
      <span class="flex-2">{{ item.email }}</span>
      <button class="cursor-pointer flex-1 text-left" @click="unbanUser(item.id)">Отменить бан</button>
    </li>
  </ul>
</template>

<style scoped>

</style>