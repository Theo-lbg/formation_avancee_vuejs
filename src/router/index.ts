import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'home' },
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../pages/HomePage.vue'),
      },
      {
        path: 'explore',
        name: 'explore',
        component: () => import('../pages/ExplorePage.vue'),
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import('../pages/NotificationsPage.vue'),
      },
      {
        path: 'messages',
        name: 'messages',
        component: () => import('../pages/MessagesPage.vue'),
      },
      {
        path: 'bookmarks',
        name: 'bookmarks',
        component: () => import('../pages/BookmarksPage.vue'),
      },
      {
        path: 'lists',
        name: 'lists',
        component: () => import('../pages/ListsPage.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../pages/ProfilePage.vue'),
      },
      {
        path: 'more',
        name: 'more',
        component: () => import('../pages/MorePage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
