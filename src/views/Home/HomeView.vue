<script setup>
import Hero from './layout/Hero.vue'
import Serve from './layout/Serve.vue'
import Food from './layout/Food.vue'
import Restaurant from './layout/Restaurant.vue'
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
