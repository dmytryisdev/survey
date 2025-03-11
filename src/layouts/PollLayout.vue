<script setup lang="ts">
import Tabs from '~/components/poll/Tabs.vue'

const tabs = [
  { label: 'Параметры', link: 'poll-parameters' },
  { label: 'Вопросы', link: 'poll-questions' },
  { label: 'Логика', link: 'poll-logic' },
  { label: 'Условия', link: 'poll-conditions' },
  { label: 'Респонденты', link: 'poll-respondents' }
]
</script>

<template>
  <Tabs :data="tabs" class="mb-6"/>
  <RouterView />
</template>

<style scoped>

</style>