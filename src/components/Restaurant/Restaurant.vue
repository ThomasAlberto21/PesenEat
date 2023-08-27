<script setup>
import CardRestaurant from './CardRestaurant.vue'
import ButtonSeeAllRestaurant from './ButtonSeeAllRestaurant.vue'
</script>

<template>
  <div class="px-3 mx-auto mb-10 text-center mt-52 max-w-7xl">
    <p class="text-xl font-semibold text-yellow-400">RESTAURANTS</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">
      Find Your Favorite <br />
      Restaurants
    </h1>
    <CardRestaurant />
    <ButtonSeeAllRestaurant />
  </div>
</template>

<script>
export default {
  name: 'RestaurantComponent'
}
</script>
