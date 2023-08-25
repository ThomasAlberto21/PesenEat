<script setup>
import { serve } from '../../constants/constants'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 px-2">
    <div
      v-for="item in serve"
      :key="item.id"
      class="max-w-md p-6 bg-white border border-gray-200 rounded-2xl shadow-xl mb-3"
    >
      <img
        :src="item.image"
        alt="Service Image"
        class="w-24 h-24 mx-auto mb-4 p-6 bg-yellow-500 rounded-full"
      />

      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black mt-5">
        {{ item.title }}
      </h5>

      <p class="mb-3 font-medium leading-6 text-gray-500 mt-5 text-lg">
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
