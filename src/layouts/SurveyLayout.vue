<script setup lang="ts">
import Tabs from '../components/survey/Tabs.vue'

const tabs = [
  { label: 'Параметры', link: 'survey-parameters' },
  { label: 'Вопросы', link: 'survey-questions' },
  { label: 'Логика', link: 'survey-logic' },
  { label: 'Условия', link: 'survey-conditions' },
  { label: 'Респонденты', link: 'survey-respondents' }
]
</script>

<template>
  <Tabs :data="tabs" class="mb-6"/>
  <RouterView />
</template>

<style scoped>

</style>