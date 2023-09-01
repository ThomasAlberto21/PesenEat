import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginView.vue')
    },
    {
      path: '/',
      name: 'users',
      component: () => import('@/views/Users/Users.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Users/Home/HomeView.vue')
        },
        {
          path: '/food-menu',
          name: 'foodMenu',
          component: () => import('@/views/Users/FoodMenu/FoodMenuView.vue')
        },
        {
          path: '/restaurants',
          name: 'restaurants',
          component: () => import('@/views/Users/Restaurants/RestaurantsView.vue')
        },
        {
          path: '/contact-us',
          name: 'contactUs',
          component: () => import('@/views/Users/ContactUs/ContactUsView.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/Users/Cart/CartView.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/Users/Profile/ProfileView.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/views/Users/Settings/SettingsView.vue')
        }
      ]
    }
  ]
})

export default router
