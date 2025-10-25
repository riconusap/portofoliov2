import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('./views/HomePage.vue'),
      },
      {
        path: 'projects',
        name: 'AllProjects',
        component: () => import('./views/AllProjects.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Jika tombol back/forward, gunakan posisi tersimpan
    if (savedPosition) {
      return savedPosition
    }
    // Jika ada hash (#section), scroll ke anchor dengan offset header
    if (to.hash) {
      // Offset 80px agar tidak tertutup header fixed
      const el = document.querySelector(to.hash) as HTMLElement | null
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        return window.scrollTo({ top, behavior: 'smooth' })
      }
      return { el: to.hash }
    }
    // Default: scroll ke atas halaman
    return { left: 0, top: 0 }
  },
})

export default router
