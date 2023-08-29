<script setup>
import CardFood from './CardFood.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <div class="px-3 mx-auto mb-20 mt-52 text-start max-w-7xl">
    <p class="text-xl font-semibold text-yellow-400">FOODS</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">Recomendations</h1>

    <CardFood />
    <div class="text-center">
      <Button icon="fluent:food-16-filled" title="See All Foods" to="/food-menu" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FoodComponent'
}
</script>
