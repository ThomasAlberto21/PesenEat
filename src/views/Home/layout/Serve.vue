<script setup>
import CardServe from '@/components/CardServe.vue'
import { serve } from '@/constants/constants'
</script>

<template>
  <div class="px-3 mx-auto my-10 text-center max-w-7xl">
    <p class="text-xl font-semibold text-yellow-400">WHAT WE SERVE</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">
      Our Food Is Always <br />
      Freshly Prepared
    </h1>

    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="item in serve"
        :key="item.id"
        class="p-6 mb-3 bg-white border border-gray-200 shadow-xl max-w-screen rounded-2xl"
      >
        <CardServe :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServeSection'
}
</script>
