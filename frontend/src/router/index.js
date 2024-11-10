import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      props: true
    },

    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../components/DetailsComp.vue'),
      props:true
    },
    {
      path: '/new-post',
      name: 'createblog',
      component: () => import('../components/CreateNew.vue')
    },
  ],
})

export default router
