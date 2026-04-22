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
  <section class="base-panel">
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
  </section>
</template>

<style scoped>
.base-panel {
  background: transparent;
  border: 0;
  box-shadow: none;
}

.base-panel__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0 0.5rem;
}

.base-panel__body {
  padding: 0 0 0.5rem;
}

.base-panel__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
