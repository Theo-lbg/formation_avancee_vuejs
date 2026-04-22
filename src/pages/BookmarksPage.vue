<script setup lang="ts">
import BasePanel from '../components/BasePanel.vue'
import PostCard from '../components/PostCard.vue'
import { useSocialStore } from '../stores/social'

const social = useSocialStore()
</script>

<template>
  <section class="page-grid">
    <BasePanel subtitle="Saved" title="Bookmarks">
      <p class="mb-0 text-medium-emphasis">
        Posts saved from the feed are shown here.
      </p>
    </BasePanel>

    <PostCard
      v-for="post in social.bookmarkedPosts"
      :key="post.id"
      :post="post"
      @like="social.toggleLike"
      @bookmark="social.toggleBookmark"
    />

    <BasePanel v-if="social.bookmarkedPosts.length === 0" title="No bookmarks yet">
      <p class="mb-0 text-medium-emphasis">
        Save a post from the home feed to see it listed here.
      </p>
    </BasePanel>
  </section>
</template>

<style scoped>
.page-grid {
  display: grid;
  gap: 1.25rem;
}
</style>