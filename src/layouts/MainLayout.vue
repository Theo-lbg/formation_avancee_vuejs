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
  background: #ffffff;
}

.main-layout__shell {
  width: min(1280px, 100vw);
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 0;
  align-items: start;
}

.main-layout__content {
  min-width: 0;
  padding: 0;
}

.main-layout__content-inner {
  display: grid;
  gap: 0;
}

@media (max-width: 1200px) {
  .main-layout__shell {
    width: 100vw;
  }
}

@media (max-width: 860px) {
  .main-layout__shell {
    grid-template-columns: 1fr;
    width: 100vw;
  }

  .main-layout__shell :deep(.app-sidebar) {
    position: static;
  }
}
</style>
