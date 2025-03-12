<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type UserModel from '~/models/User';
import { fetchUsers } from '~/api/Users.ts';
import UserModal from '~/components/modal/User.vue'
import Loader from '~/components/app/Loader.vue';
import Empty from '~/components/app/Empty.vue';

const isLoading = ref(true)
const list = ref<UserModel[]>([])

const showModal = ref(false);
const getUsers = async () => {
  try {
    list.value = await fetchUsers();
  } catch (error) {
    console.error(error);
  }  finally {
    isLoading.value = false;
  }
};

const createUser = () => {
  showModal.value = true;
}

const handleCreateUser = (user: UserModel) => {
  list.value.push(user);
}

onMounted(() => getUsers());
</script>

<template>
  <div class="flex items-center p-3">
    <span class="flex-2 font-bold">ФИО</span>
    <span class="flex-2 font-bold">Email</span>
    <button
      class="cursor-pointer flex-1 text-left font-bold"
      @click="createUser"
    >Добавить пользователя</button>
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
      <button class="cursor-pointer flex-1 text-left">Редактировать</button>
    </li>
  </ul>

  <UserModal v-model="showModal" @create-user="handleCreateUser"/>
</template>

<style scoped>

</style>