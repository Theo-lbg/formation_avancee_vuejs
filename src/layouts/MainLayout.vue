<script setup lang="ts">
import AppSidebar from '../components/AppSidebar.vue'
</script>

<template>
  <v-app class="main-layout">
    <v-main>
      <div class="main-layout__shell">
        <AppSidebar />

        <section class="main-layout__content">
          <div class="main-layout__content-inner">
            <router-view />
          </div>
        </section>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.main-layout {
  background: #f5f7fb;
}

.main-layout__shell {
  width: min(1180px, calc(100vw - 1rem));
  margin: 0 auto;
  padding: 0.75rem 0;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
}

.main-layout__content {
  min-width: 0;
}

.main-layout__content-inner {
  display: grid;
  gap: 0.75rem;
}

@media (max-width: 1200px) {
  .main-layout__shell {
    width: min(100vw - 1rem, 1180px);
  }
}

@media (max-width: 860px) {
  .main-layout__shell {
    grid-template-columns: 1fr;
    width: min(100vw - 1rem, 900px);
  }

  .main-layout__shell :deep(.app-sidebar) {
    position: static;
  }
}
</style>
