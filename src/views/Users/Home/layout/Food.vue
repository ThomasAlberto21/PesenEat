<script setup>
import ButtonIcon from '@/components/Button/ButtonPrimaryIcon.vue'
import CardFood from '@/components/CardFood.vue'
import { foodMenu } from '@/constants/constants'
</script>

<template>
  <div class="px-3 mx-auto mb-20 mt-52 text-start max-w-7xl">
    <p class="text-xl font-semibold text-yellow-400">FOODS</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">Recomendations</h1>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="item in foodMenu"
        :key="item.id"
        class="mb-3 bg-white border border-gray-200 shadow-xl max-w-screen rounded-2xl"
      >
        <CardFood :item="item" />
      </div>
    </div>
    <div class="text-center">
      <ButtonIcon icon="fluent:food-16-filled" title="See All Foods" to="/food-menu" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodSection'
}
</script>
