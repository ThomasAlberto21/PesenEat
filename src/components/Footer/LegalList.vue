<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h2 class="mb-6 text-lg font-bold text-white">Legal</h2>
    <ul class="text-white font-medium">
      <li class="mb-4" v-for="(legalItem, index) in footer.legal" :key="index">
        <RouterLink :to="legalItem.to" class="hover:underline">{{ legalItem.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LegalListComponent',
  props: ['footer']
}
</script>
