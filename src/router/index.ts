import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SupportView from '@/views/SupportView.vue'
import TvHomeView from '@/views/TvHomeView.vue'
import SignIn from '@/views/SignIn.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/Layout/Headers.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },    
      {
        path: '/support',
        name: 'support',
        component: SupportView,
      },
      {
        path: '/tvhome',
        name: 'tvhome',
        component: TvHomeView,
      },
      ]
    },

    { 
      path: '/sign-in', 
      component: SignIn 
    },
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/sign-in']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !authStore.isSignIn) {
    return '/sign-in'
  }
})

export default router;

