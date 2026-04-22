<script setup lang="ts">
import BasePanel from '../components/BasePanel.vue'
import { useSocialStore } from '../stores/social'

const social = useSocialStore()
</script>

<template>
  <section class="page-grid">
    <BasePanel subtitle="Discover" title="Explore">
      <p class="mb-0 text-medium-emphasis">
        Use this route to practice discoverability, search and content curation.
      </p>
    </BasePanel>

    <BasePanel title="Trending topics">
      <div class="page-grid__stack">
        <article v-for="trend in social.trends" :key="trend.label" class="page-grid__item">
          <p class="text-caption text-medium-emphasis mb-1">{{ trend.audience }}</p>
          <h3 class="text-subtitle-1 mb-1">{{ trend.label }}</h3>
          <p class="text-body-2 text-medium-emphasis mb-0">{{ trend.details }}</p>
        </article>
      </div>
    </BasePanel>
  </section>
</template>

<style scoped>
.page-grid {
  display: grid;
  gap: 1.25rem;
}

.page-grid__stack {
  display: grid;
  gap: 0.9rem;
}

.page-grid__item {
  border-radius: 1rem;
  background: rgba(248, 250, 252, 0.92);
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 0.9rem;
}
</style>