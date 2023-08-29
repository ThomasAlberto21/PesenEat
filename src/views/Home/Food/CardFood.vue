<script setup>
import { foodMenu } from '@/constants/constants'
import { Rating } from 'flowbite-vue'
</script>

<template>
  <div class="grid grid-cols-2 gap-3 md:grid-cols-2 xl:grid-cols-4">
    <div
      v-for="item in foodMenu"
      :key="item.id"
      class="mb-3 bg-white border border-gray-200 shadow-xl max-w-screen rounded-2xl"
    >
      <img :src="item.image" alt="Service Image" class="w-screen mx-auto mb-4 rounded-t-2xl" />
      <div class="px-4 mt-3 mb-4">
        <h1 class="mb-2 font-semibold tracking-tight text-black text-md md:text-2xl xl:text-2xl">
          {{ item.title }}
        </h1>

        <div class="flex items-center justify-between">
          <h2 class="text-xl font-medium text-gray-500">${{ item.price }}</h2>

          <Rating :rating="1" :scale="1" review-link="#">
            <template #besideText>
              <h2 class="ml-2 text-lg font-bold text-gray-600">
                {{ item.rating }}
              </h2>
            </template>
          </Rating>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardFoodComponent'
}
</script>
