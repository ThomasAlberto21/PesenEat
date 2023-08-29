<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section>
    <div
      class="grid max-w-screen-xl h-[100vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-20"
    >
      <div class="mr-auto place-self-center lg:col-span-8">
        <h1 class="max-w-3xl mb-4 text-3xl font-bold leading-10 text-white md:text-7xl xl:text-7xl">
          Get your <b class="text-yellow-400">favorite food </b> straight to your doorstep easily
          and quickly
        </h1>
        <Button icon="fluent:food-16-filled" title="Order Now" to="/food-menu" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroComponent'
}
</script>

<style>
section {
  background-image: url('/images/Hero.png');
  background-size: cover;
  background-position: center;
}

h1 {
  font-family: 'Poppins', sans-serif;
}
</style>
