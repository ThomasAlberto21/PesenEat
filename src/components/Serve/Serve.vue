<script setup>
import CardServe from './CardServe.vue'
</script>

<template>
  <div class="mx-auto max-w-7xl text-center my-10">
    <p class="text-yellow-500 text-xl font-semibold">WHAT WE SERVE</p>
    <h1 class="text-4xl xl:text-7xl font-bold mb-5">
      Our Food Is Always <br />
      Freshly Prepared
    </h1>
    <CardServe />
  </div>
</template>
<script>
export default {
  name: 'ServeComponent'
}
</script>
