<script setup>
import { serve } from '@/constants/constants'
</script>

<template>
  <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
    <div
      v-for="item in serve"
      :key="item.id"
      class="p-6 mb-3 bg-white border border-gray-200 shadow-xl max-w-screen rounded-2xl"
    >
      <img
        :src="item.image"
        alt="Service Image"
        class="w-24 h-24 p-6 mx-auto mb-4 bg-yellow-400 rounded-full"
      />

      <h5 class="mt-5 mb-2 text-2xl font-semibold tracking-tight text-black">
        {{ item.title }}
      </h5>

      <p class="mt-5 mb-3 text-lg font-medium leading-6 text-gray-500">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardServeComponent'
}
</script>

<style>
h5 {
  font-family: 'Poppins', sans-serif;
}
</style>
