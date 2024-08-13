import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('@/views/MainView.vue')
    },
    {
      name: 'genre',
      path: '/genre',
      component: () => import('@/views/GenreView.vue')
    },
    {
      name: 'types',
      path: '/types/:id',
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
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router