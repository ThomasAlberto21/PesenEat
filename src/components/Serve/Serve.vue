<script setup>
import CardServe from './CardServe.vue'
</script>

<template>
  <div class="px-3 mx-auto my-10 text-center max-w-7xl">
    <p class="text-xl font-semibold text-yellow-400">WHAT WE SERVE</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">
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
