<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <h2 class="mb-6 text-lg font-bold text-white">Contact</h2>
    <ul class="text-white font-medium">
      <li class="mb-4" v-for="(contact, index) in footer.contact" :key="index">
        <RouterLink :to="contact.to" class="hover:underline flex items-center gap-3">
          <Icon :icon="contact.icon" class="w-6 h-6" />
          {{ contact.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ContactListComponent',
  props: ['footer']
}
</script>
