import type { SocialPost, SocialUser, Suggestion, Trend } from '../types/social'

export const demoCurrentUser: SocialUser = {
  id: 1,
  name: 'Alex Martin',
  handle: '@alexbuilds',
  avatar: 'https://i.pravatar.cc/160?img=12',
  bio: 'Vue trainer. I build interfaces, design systems and useful demos for workshops.',
  verified: true,
}

export const demoTrends: Trend[] = [
  {
    label: '#VueJS',
    audience: 'Trending in tech',
    details: '19.8K posts today',
  },
  {
    label: '#Vuetify',
    audience: 'Component library',
    details: '8.1K posts today',
  },
  {
    label: '#Pinia',
    audience: 'State management',
    details: '4.6K posts today',
  },
  {
    label: '#Router',
    audience: 'Navigation',
    details: '3.2K posts today',
  },
]

export const demoSuggestions: Suggestion[] = [
  {
    id: 1,
    name: 'Nuxt Masters',
    handle: '@nuxtmasters',
    avatar: 'https://i.pravatar.cc/160?img=32',
    title: 'Training lab and starter kits',
  },
  {
    id: 2,
    name: 'Frontend Guild',
    handle: '@frontendguild',
    avatar: 'https://i.pravatar.cc/160?img=45',
    title: 'Sharing UI patterns every week',
  },
  {
    id: 3,
    name: 'Design Ops',
    handle: '@designops',
    avatar: 'https://i.pravatar.cc/160?img=56',
    title: 'Design systems and team workflows',
  },
]

export const demoPosts: SocialPost[] = [
  {
    id: 101,
    authorName: 'Android Authority',
    handle: '@androidauth',
    avatar: 'https://i.pravatar.cc/160?img=21',
    verified: true,
    timeLabel: '7m',
    content:
      'Fairly warm in some places today. Keep your phone out of direct sunlight and stay safe out there.',
    mediaUrl: null,
    likes: 22,
    replies: 1,
    reposts: 0,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 102,
    authorName: 'Tushar Mehta',
    handle: '@tusharmonbay',
    avatar: 'https://i.pravatar.cc/160?img=18',
    verified: false,
    timeLabel: '3h',
    content:
      'Stop shipping with the design and work on fixing the user flow. The best demo is the one people can understand instantly.',
    mediaUrl: 'https://picsum.photos/seed/social-demo-102/1200/700',
    likes: 4,
    replies: 2,
    reposts: 1,
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 103,
    authorName: 'John Bishop',
    handle: '@johnbishop100',
    avatar: 'https://i.pravatar.cc/160?img=24',
    verified: true,
    timeLabel: 'Jun 25',
    content:
      'Just watched someone refactor a whole feed into reusable components. That is the moment the app really starts to breathe.',
    mediaUrl: null,
    likes: 344,
    replies: 12,
    reposts: 148,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 104,
    authorName: 'Eddy Richman',
    handle: '@eddyrichman',
    avatar: 'https://i.pravatar.cc/160?img=67',
    verified: false,
    timeLabel: '1d',
    content:
      'A good workshop app needs a fast layout, strong patterns and a feed that feels like it could keep growing.',
    mediaUrl: 'https://picsum.photos/seed/social-demo-104/1200/700',
    likes: 61,
    replies: 4,
    reposts: 2,
    isLiked: false,
    isBookmarked: false,
  },
]