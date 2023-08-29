<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <img
      :src="item.image"
      alt="Service Image"
      class="w-24 h-24 p-6 mx-auto mb-4 bg-yellow-400 rounded-full"
    />

    <h5
      class="mt-5 mb-2 text-2xl font-semibold tracking-tight text-black"
      style="font-family: Poppins, sans-serif"
    >
      {{ item.title }}
    </h5>

    <p class="mt-5 mb-3 text-lg font-medium leading-6 text-gray-500">
      {{ item.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardServeComponent'
}
</script>
