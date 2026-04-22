<script setup lang="ts">
const draft = defineModel<string>({
  default: '',
})

const emit = defineEmits<{
  publish: [content: string]
}>()

function publishPost() {
  const trimmedContent = draft.value.trim()

  if (!trimmedContent) {
    return
  }

  emit('publish', trimmedContent)
  draft.value = ''
}
</script>

<template>
  <div class="post-composer">
    <v-avatar class="post-composer__avatar" size="48">
      <v-img src="https://i.pravatar.cc/160?img=12" alt="Current user" cover />
    </v-avatar>

    <div class="post-composer__content">
      <v-textarea
        v-model="draft"
        auto-grow
        rows="2"
        variant="outlined"
        label="What is happening?"
        hide-details
      />

      <div class="post-composer__footer">
        <span class="text-caption text-medium-emphasis">
          Write a short post, react to the feed or share a workshop idea.
        </span>

        <v-btn color="primary" rounded="xl" :disabled="!draft.trim()" @click="publishPost">
          Post
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-composer {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
}

.post-composer__content {
  display: grid;
  gap: 0.85rem;
}

.post-composer__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
</style>
