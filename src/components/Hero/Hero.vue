<script setup>
import ButtonOrderNow from './ButtonOrderNow.vue'
</script>
<template>
  <section>
    <div
      class="grid max-w-screen-xl h-[93vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-8">
        <h1
          class="max-w-3xl mb-4 text-3xl font-bold md:text-7xl xl:text-7xl dark:text-white leading-10"
        >
          Get your <b class="text-yellow-500">favorite food </b> straight to your doorstep easily
          and quickly
        </h1>
        <ButtonOrderNow />
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
  background-image: url('../../assets/images/Hero.png');
  background-size: cover;
  background-position: center;
}

h1 {
  font-family: 'Poppins', sans-serif;
}
</style>
