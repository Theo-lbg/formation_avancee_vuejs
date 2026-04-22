<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navigationItems = [
  { label: 'Home', name: 'home' },
  { label: 'Explore', name: 'explore' },
  { label: 'Notifications', name: 'notifications' },
  { label: 'Messages', name: 'messages' },
  { label: 'Bookmarks', name: 'bookmarks' },
  { label: 'Lists', name: 'lists' },
  { label: 'Profile', name: 'profile' },
  { label: 'More', name: 'more' },
]
</script>

<template>
  <aside class="app-sidebar">
    <v-card class="app-sidebar__card" rounded="0" elevation="0">
      <div class="app-sidebar__brand">
        <v-avatar color="primary" size="36">
          <span class="text-white font-weight-bold">X</span>
        </v-avatar>
        <div>
          <p class="text-caption text-medium-emphasis mb-0">Vue workshop</p>
          <h1 class="text-subtitle-1 mb-0">Social Lab</h1>
        </div>
      </div>

      <v-list class="app-sidebar__nav" density="comfortable" nav>
        <v-list-item
          v-for="item in navigationItems"
          :key="item.name"
          :to="{ name: item.name }"
          rounded="0"
          :active="route.name === item.name"
          class="app-sidebar__item"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-btn color="primary" size="large" rounded="lg" block class="mt-4">
        Post
      </v-btn>
    </v-card>
  </aside>
</template>

<style scoped>
.app-sidebar {
  position: sticky;
  top: 0.75rem;
  align-self: start;
}

.app-sidebar__card {
  padding: 0.9rem;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-shadow: none;
}

.app-sidebar__brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.app-sidebar__nav {
  padding: 0;
}

.app-sidebar__item {
  margin-bottom: 0.15rem;
}
</style>
