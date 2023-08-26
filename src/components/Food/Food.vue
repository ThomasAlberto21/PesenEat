<script setup>
import CardFood from './CardFood.vue'
import ButtonSeeAllFood from './ButtonSeeAllFood.vue'
</script>

<template>
  <div class="mx-auto mt-52 mb-20 text-start max-w-7xl px-3">
    <p class="text-xl font-semibold text-yellow-400">FOODS</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">Recomendations</h1>

    <CardFood />
    <div class="text-center">
      <ButtonSeeAllFood />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FoodComponent'
}
</script>
