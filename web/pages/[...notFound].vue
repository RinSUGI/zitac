<script setup lang="ts">
import { errorMessages } from '~/constants/errorMessages';
import { uiMessages } from '~/constants/uiMessages';
</script>

<template>
  <div class="error-page">
    <div>{{ errorMessages.common.notFound }}</div>
    <NuxtLink to="/">{{ uiMessages.common.returnToTop }}</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
}
</style>
