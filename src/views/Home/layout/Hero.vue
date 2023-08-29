<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section
    class="bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/Hero.png')"
  >
    <div
      class="grid max-w-screen-xl h-[100vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-20"
    >
      <div class="mr-auto place-self-center lg:col-span-8">
        <h1
          class="max-w-3xl mb-4 text-3xl font-bold leading-10 text-white md:text-7xl xl:text-7xl"
          style="font-family: Poppins, sans-serif"
        >
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
  name: 'HeroSection'
}
</script>
