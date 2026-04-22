<script setup lang="ts">
import { useSocialStore } from '../stores/social'

import BasePanel from './BasePanel.vue'

const social = useSocialStore()
</script>

<template>
  <aside class="right-rail">
    <BasePanel subtitle="Discover" title="Worldwide trends">
      <template #actions>
        <span class="text-caption text-medium-emphasis">Live</span>
      </template>

      <div class="right-rail__stack">
        <article v-for="trend in social.trends" :key="trend.label" class="right-rail__item">
          <p class="text-caption text-medium-emphasis mb-1">{{ trend.audience }}</p>
          <h3 class="text-subtitle-1 mb-1">{{ trend.label }}</h3>
          <p class="text-body-2 text-medium-emphasis mb-0">{{ trend.details }}</p>
        </article>
      </div>
    </BasePanel>

    <BasePanel subtitle="People" title="Who to follow" class="mt-5">
      <div class="right-rail__stack">
        <article
          v-for="suggestion in social.suggestions"
          :key="suggestion.id"
          class="right-rail__follow"
        >
          <v-avatar size="42">
            <v-img :src="suggestion.avatar" :alt="suggestion.name" cover />
          </v-avatar>

          <div class="right-rail__follow-content">
            <p class="font-weight-medium mb-0">{{ suggestion.name }}</p>
            <p class="text-body-2 text-medium-emphasis mb-1">{{ suggestion.handle }}</p>
            <p class="text-caption text-medium-emphasis mb-0">{{ suggestion.title }}</p>
          </div>

          <v-btn color="primary" size="small" variant="tonal" rounded="xl">
            Follow
          </v-btn>
        </article>
      </div>
    </BasePanel>
  </aside>
</template>

<style scoped>
.right-rail {
  position: sticky;
  top: 0.75rem;
  align-self: start;
}

.right-rail__stack {
  display: grid;
  gap: 0.75rem;
}

.right-rail__item,
.right-rail__follow {
  border-radius: 0.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
}

.right-rail__follow {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.75rem;
  align-items: center;
}

.right-rail__follow-content {
  min-width: 0;
}
</style>
