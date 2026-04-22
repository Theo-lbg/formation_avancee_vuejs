<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import BasePanel from '../components/BasePanel.vue'
import PostCard from '../components/PostCard.vue'
import PostComposer from '../components/PostComposer.vue'
import { useSocialStore } from '../stores/social'

const social = useSocialStore()

const draft = ref('')
const query = ref('')

const filteredPosts = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase()

  if (!normalizedQuery) {
    return social.posts
  }

  return social.posts.filter((post) => {
    const searchTarget = `${post.authorName} ${post.handle} ${post.content}`.toLowerCase()

    return searchTarget.includes(normalizedQuery)
  })
})

onMounted(() => {
  social.loadFeed()
})
</script>

<template>
  <section class="home-page">
    <BasePanel subtitle="Home" title="Timeline">
      <template #actions>
        <v-chip color="primary" variant="flat" rounded="0"> For you </v-chip>
      </template>

      <PostComposer v-model="draft" @publish="social.publishPost" />
    </BasePanel>

    <v-text-field
      v-model="query"
      class="home-page__search"
      label="Search posts"
      variant="solo-filled"
      prepend-inner-icon=""
      hide-details
      clearable
    />

    <v-alert v-if="social.error" type="warning" variant="tonal" rounded="xl">
      {{ social.error }}
    </v-alert>

    <div v-if="social.isLoading" class="home-page__loading">
      <v-progress-circular indeterminate color="primary" />
      <p class="text-body-1 text-medium-emphasis mb-0">Loading the feed...</p>
    </div>

    <template v-else>
      <PostCard
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        @like="social.toggleLike"
        @bookmark="social.toggleBookmark"
      />

      <BasePanel v-if="filteredPosts.length === 0" title="No posts found" subtitle="Search">
        <p class="mb-0 text-medium-emphasis">
          Try another keyword or publish a new post from the composer above.
        </p>
      </BasePanel>
    </template>
  </section>
</template>

<style scoped>
.home-page {
  display: grid;
  gap: 0.75rem;
}

.home-page__search {
  background: #ffffff;
}

.home-page__loading {
  display: grid;
  place-items: center;
  gap: 0.75rem;
  min-height: 10rem;
}
</style>
