<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    <!-- Logo -->
    <RouterLink to="/" class="flex flex-shrink-0 items-center">
      <img class="h-10 w-auto" src="../../assets/images/Logo.png" alt="Your Company" />
    </RouterLink>
    <!-- Navlinks -->
    <div class="hidden sm:ml-auto sm:mr-auto sm:flex">
      <div class="flex space-x-6">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          :class="[
            item.current
              ? 'bg-yellow-500 text-black'
              : 'text-black hover:text-yellow-500 font-medium',
            'rounded-md px-3 py-2 text-base font-medium '
          ]"
          >{{ item.name }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavlinksComponent',
  props: ['navigation']
}
</script>
