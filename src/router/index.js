import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue')
    },
    {
      path: '/food-menu',
      name: 'foodMenu',
      component: () => import('../views/FoodMenu/FoodMenuView.vue')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../views/Restaurants/RestaurantsView.vue')
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: () => import('../views/ContactUs/ContactUsView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart/CartView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile/ProfileView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings/SettingsView.vue')
    }
  ]
})

export default router
