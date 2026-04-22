<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
  }>(),
  {
    title: '',
    subtitle: '',
  },
)
</script>

<template>
  <v-card class="base-panel" rounded="0" elevation="0">
    <div class="base-panel__header">
      <div>
        <p v-if="subtitle" class="text-overline mb-1 text-medium-emphasis">
          {{ subtitle }}
        </p>
        <h2 v-if="title" class="text-h6 text-slate-900">
          {{ title }}
        </h2>
        <slot name="title" />
      </div>
      <div class="base-panel__actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="base-panel__body">
      <slot />
    </div>
  </v-card>
</template>

<style scoped>
.base-panel {
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-shadow: none;
}

.base-panel__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1rem 0.65rem;
}

.base-panel__body {
  padding: 0 1rem 1rem;
}

.base-panel__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
