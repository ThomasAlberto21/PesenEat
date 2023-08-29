<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
    <!-- Logo -->
    <RouterLink to="/" class="flex items-center flex-shrink-0">
      <img class="w-auto h-10" src="/images/logo/Logo.png" alt="Your Company" />
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
              : 'text-black hover:text-yellow-500 font-semibold',
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
