<script setup lang="ts">
import type { SocialPost } from '../types/social'

defineProps<{
  post: SocialPost
}>()

defineEmits<{
  like: [postId: number]
  bookmark: [postId: number]
}>()
</script>

<template>
  <v-card class="post-card" rounded="0" elevation="0">
    <div class="post-card__header">
      <v-avatar size="48">
        <v-img :src="post.avatar" :alt="post.authorName" cover />
      </v-avatar>

      <div class="post-card__identity">
        <div class="post-card__identity-row">
          <h3 class="text-subtitle-1 mb-0">{{ post.authorName }}</h3>
          <span v-if="post.verified" class="post-card__verified">Verified</span>
        </div>
        <p class="text-body-2 text-medium-emphasis mb-0">
          {{ post.handle }} · {{ post.timeLabel }}
        </p>
      </div>
    </div>

    <p class="post-card__content mb-4">{{ post.content }}</p>

    <v-img
      v-if="post.mediaUrl"
      class="post-card__media mb-4"
      :src="post.mediaUrl"
      height="280"
      cover
      rounded="lg"
    />

    <div class="post-card__actions">
      <v-btn variant="text" size="small" @click="$emit('like', post.id)">
        {{ post.isLiked ? 'Liked' : 'Like' }} · {{ post.likes }}
      </v-btn>
      <v-btn variant="text" size="small">
        Reply · {{ post.replies }}
      </v-btn>
      <v-btn variant="text" size="small">
        Repost · {{ post.reposts }}
      </v-btn>
      <v-btn variant="text" size="small" @click="$emit('bookmark', post.id)">
        {{ post.isBookmarked ? 'Saved' : 'Save' }}
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.post-card {
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-shadow: none;
}

.post-card__header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 0.9rem;
}

.post-card__identity {
  min-width: 0;
}

.post-card__identity-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-card__verified {
  border-radius: 0.25rem;
  padding: 0.15rem 0.4rem;
  background: rgba(29, 155, 240, 0.12);
  color: rgb(29, 155, 240);
  font-size: 0.75rem;
  font-weight: 700;
}

.post-card__content {
  line-height: 1.65;
  font-size: 1rem;
}

.post-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
