import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'main',
      path: '/main',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/',
      redirect: { name: 'main' }
    },
    {
      name: 'genre',
      path: '/genre',
      component: () => import('@/views/GenreView.vue')
    },
    {
      name: 'types',
      path: '/types',
      component: () => import('@/views/TypesView.vue')
    },
    {
      name: 'film',
      path: '/film/:id',
      component: () => import('@/views/FilmView.vue')
    },
    {
      name: 'account',
      path: '/account',
      component: () => import('@/views/AccountView.vue'),
      children: [
        {
          name: 'favorites',
          path: '/account/favorites',
          component: () => import('@/views/AccountFavoritesView.vue')
        },
        {
          name: 'settings',
          path: '/account/settings',
          component: () => import('@/views/AccountSettingsView.vue')
        }
      ]
    }
  ]
})

export default router