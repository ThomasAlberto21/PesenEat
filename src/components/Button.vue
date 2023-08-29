<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink
    :to="to"
    class="inline-flex items-center justify-center gap-2 py-3 mt-5 mr-3 text-base font-bold text-center text-white bg-yellow-400 rounded-lg px-7 hover:bg-yellow-500"
  >
    <Icon :icon="icon" class="text-2xl text-white" />

    {{ title }}
  </RouterLink>
</template>

<script>
export default {
  name: 'ButtonComponent'
}
</script>
