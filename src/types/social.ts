export interface SocialUser {
  id: number
  name: string
  handle: string
  avatar: string
  bio: string
  verified: boolean
}

export interface SocialPost {
  id: number
  authorName: string
  handle: string
  avatar: string
  verified: boolean
  timeLabel: string
  content: string
  mediaUrl?: string | null
  likes: number
  replies: number
  reposts: number
  isLiked: boolean
  isBookmarked: boolean
}

export interface Trend {
  label: string
  audience: string
  details: string
}

export interface Suggestion {
  id: number
  name: string
  handle: string
  avatar: string
  title: string
}