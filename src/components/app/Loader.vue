<script setup lang="ts">

import ProgressSpinner from 'primevue/progressspinner';
</script>

<template>
  <div class="flex justify-between w-full items-center p-8">
    <ProgressSpinner
      class="custom-spinner"
      style="width: 50px; height: 50px;"
      strokeWidth="8"
      fill="transparent"
      animationDuration=".5s"
    />
  </div>
</template>

<style scoped>

</style>