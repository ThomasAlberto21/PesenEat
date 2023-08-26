<script setup>
import Hero from '../components/Hero/Hero.vue'
import Serve from '../components/Serve/Serve.vue'
import Food from '../components/Food/Food.vue'
import Restaurant from '../components/Restaurant/Restaurant.vue'
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
