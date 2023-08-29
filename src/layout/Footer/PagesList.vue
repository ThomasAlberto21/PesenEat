<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h2 class="mb-6 text-lg font-bold text-white">Pages</h2>
    <ul class="font-medium text-white">
      <li v-for="(page, index) in footer.pages" :key="index" class="mb-4">
        <RouterLink :to="page.to" class="hover:underline">{{ page.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'PagesListComponent',
  props: ['footer']
}
</script>
