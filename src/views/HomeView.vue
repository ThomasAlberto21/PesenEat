<script setup>
import Hero from '../components/Hero/Hero.vue'
import Serve from '../components/Serve/Serve.vue'
import Food from '../components/Food/Food.vue'
</script>

<template>
  <div>
    <Hero />
    <Serve />
    <Food />
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
