<script setup lang="ts">
import { useRouter } from 'vue-router'

import BasePanel from '../components/BasePanel.vue'

const router = useRouter()
</script>

<template>
  <div class="not-found-shell">
    <BasePanel subtitle="404" title="Page not found">
      <p class="mb-4 text-medium-emphasis">
        The route you requested does not exist.
      </p>

      <v-btn color="primary" rounded="xl" @click="router.push({ name: 'home' })">
        Back to home
      </v-btn>
    </BasePanel>
  </div>
</template>

<style scoped>
.not-found-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: linear-gradient(180deg, #f2f6fb 0%, #edf2f7 100%);
}
</style>