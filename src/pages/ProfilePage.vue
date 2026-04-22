<script setup lang="ts">
import BasePanel from '../components/BasePanel.vue'
import PostCard from '../components/PostCard.vue'
import { useSocialStore } from '../stores/social'

const social = useSocialStore()
</script>

<template>
  <section class="page-grid">
    <BasePanel subtitle="Your profile" title="Profile">
      <div class="profile-card">
        <v-avatar size="72">
          <v-img :src="social.currentUser.avatar" :alt="social.currentUser.name" cover />
        </v-avatar>

        <div class="profile-card__body">
          <h2 class="text-h5 mb-1">{{ social.currentUser.name }}</h2>
          <p class="text-body-1 text-medium-emphasis mb-2">{{ social.currentUser.handle }}</p>
          <p class="text-body-2 mb-0">{{ social.currentUser.bio }}</p>
        </div>

        <div class="profile-card__stats">
          <div>
            <strong>{{ social.posts.length }}</strong>
            <span>Posts</span>
          </div>
          <div>
            <strong>{{ social.bookmarkedPosts.length }}</strong>
            <span>Saved</span>
          </div>
        </div>
      </div>
    </BasePanel>

    <BasePanel title="Your recent posts" subtitle="Activity">
      <div class="page-grid__stack">
        <PostCard
          v-for="post in social.profilePosts"
          :key="post.id"
          :post="post"
          @like="social.toggleLike"
          @bookmark="social.toggleBookmark"
        />
      </div>

      <p v-if="social.profilePosts.length === 0" class="mb-0 text-medium-emphasis">
        Publish a new post from the home page to see it appear here.
      </p>
    </BasePanel>
  </section>
</template>

<style scoped>
.page-grid {
  display: grid;
  gap: 1.25rem;
}

.profile-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}

.profile-card__body {
  min-width: 0;
}

.profile-card__stats {
  display: flex;
  gap: 1rem;
  text-align: center;
}

.profile-card__stats strong,
.profile-card__stats span {
  display: block;
}

.page-grid__stack {
  display: grid;
  gap: 1rem;
}

@media (max-width: 720px) {
  .profile-card {
    grid-template-columns: 1fr;
  }

  .profile-card__stats {
    justify-content: flex-start;
  }
}
</style>