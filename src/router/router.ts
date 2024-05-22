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
      path: '/film',
      component: () => import('@/views/FilmView.vue')
    },
    {
      name: 'account',
      path: '/account',
      component: () => import('@/views/AccountView.vue')
    }
  ]
})

export default router