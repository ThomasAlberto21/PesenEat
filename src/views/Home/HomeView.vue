<script setup>
import Hero from './Hero/Hero.vue'
import Serve from './Serve/Serve.vue'
import Food from './Food/Food.vue'
import Restaurant from './Restaurant/Restaurant.vue'
</script>

<template>
  <div>
    <Hero />
    <Serve />
    <Food />
    <Restaurant />
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
