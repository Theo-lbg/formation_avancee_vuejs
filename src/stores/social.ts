import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { demoCurrentUser, demoPosts, demoSuggestions, demoTrends } from '../data/social'
import type { SocialPost, SocialUser } from '../types/social'

interface JsonPlaceholderPost {
  id: number
  userId: number
  title: string
  body: string
}

interface JsonPlaceholderUser {
  id: number
  name: string
  username: string
}

function buildAvatar(seed: number) {
  return `https://i.pravatar.cc/160?img=${((seed - 1) % 70) + 1}`
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const useSocialStore = defineStore('social', () => {
  const currentUser = ref<SocialUser>(demoCurrentUser)
  const posts = ref<SocialPost[]>([...demoPosts])
  const trends = ref([...demoTrends])
  const suggestions = ref([...demoSuggestions])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const hasRemoteFeed = ref(false)

  const bookmarkedPosts = computed(() => posts.value.filter((post) => post.isBookmarked))
  const profilePosts = computed(() =>
    posts.value.filter((post) => post.handle === currentUser.value.handle),
  )

  async function loadFeed() {
    if (hasRemoteFeed.value) {
      return
    }

    isLoading.value = true
    error.value = null

    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=8'),
        fetch('https://jsonplaceholder.typicode.com/users'),
      ])

      if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error('Unable to load the remote feed')
      }

      const postsPayload = (await postsResponse.json()) as JsonPlaceholderPost[]
      const usersPayload = (await usersResponse.json()) as JsonPlaceholderUser[]

      const usersById = new Map(usersPayload.map((user) => [user.id, user]))

      posts.value = postsPayload.map((post, index) => {
        const author = usersById.get(post.userId)
        const handle = author ? `@${author.username.toLowerCase()}` : `@user${post.userId}`

        return {
          id: post.id,
          authorName: author?.name ?? `User ${post.userId}`,
          handle,
          avatar: buildAvatar(post.userId + index),
          verified: post.userId % 2 === 0,
          timeLabel: `${(index + 1) * 2}h`,
          content: `${capitalize(post.title)}. ${post.body}`,
          mediaUrl: index % 3 === 0 ? `https://picsum.photos/seed/feed-${post.id}/1200/700` : null,
          likes: 12 + post.id * 2,
          replies: post.id % 5,
          reposts: post.id % 4,
          isLiked: false,
          isBookmarked: false,
        }
      })

      hasRemoteFeed.value = true
    } catch (loadError) {
      error.value = 'Impossible de charger le flux en ligne, le contenu de démonstration est affiché.'
      console.error(loadError)
      posts.value = [...demoPosts]
    } finally {
      isLoading.value = false
    }
  }

  function publishPost(content: string) {
    const trimmedContent = content.trim()

    if (!trimmedContent) {
      return
    }

    posts.value = [
      {
        id: Date.now(),
        authorName: currentUser.value.name,
        handle: currentUser.value.handle,
        avatar: currentUser.value.avatar,
        verified: currentUser.value.verified,
        timeLabel: 'now',
        content: trimmedContent,
        mediaUrl: null,
        likes: 0,
        replies: 0,
        reposts: 0,
        isLiked: false,
        isBookmarked: false,
      },
      ...posts.value,
    ]
  }

  function toggleLike(postId: number) {
    posts.value = posts.value.map((post) =>
      post.id === postId
        ? {
            ...post,
            isLiked: !post.isLiked,
            likes: post.likes + (post.isLiked ? -1 : 1),
          }
        : post,
    )
  }

  function toggleBookmark(postId: number) {
    posts.value = posts.value.map((post) =>
      post.id === postId
        ? {
            ...post,
            isBookmarked: !post.isBookmarked,
          }
        : post,
    )
  }

  return {
    currentUser,
    posts,
    trends,
    suggestions,
    isLoading,
    error,
    bookmarkedPosts,
    profilePosts,
    loadFeed,
    publishPost,
    toggleLike,
    toggleBookmark,
  }
})