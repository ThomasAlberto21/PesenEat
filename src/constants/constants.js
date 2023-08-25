export const navigation = [
  { name: 'Home', to: '/', current: false },
  { name: 'Food Menu', to: '/food-menu', current: false },
  { name: 'Restaurants', to: '/restaurants', current: false },
  { name: 'Contact Us', to: '/contact-us', current: false }
]

export const menuItem = [
  { name: 'Your Profile', to: '/profile', current: false },
  { name: 'Settings', to: '/settings', current: false },
  { name: 'Sign Out', to: '/sign-out', current: false }
]

export const serve = [
  {
    id: 1,
    title: 'Variety Of Food',
    description: 'We serve a variety of food, from local favorites to international cuisine',
    image: '/images/Variety.png'
  },
  {
    id: 2,
    title: 'Quality Food',
    description:
      'We only work with the best restaurants, so you can be sure that your food is of the highest quality',
    image: '/images/quality.png'
  },
  {
    id: 3,
    title: 'Convenient Delivery',
    description: 'We offer convenient delivery so you can get your food right when you want it',
    image: '/images/convenient.png'
  }
]
