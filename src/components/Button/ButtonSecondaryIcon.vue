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
    class="w-full inline-flex items-center justify-center gap-2 py-4 mt-5 mr-3 text-base font-bold text-center text-black bg-gray-200 rounded-lg px-7 hover:bg-gray-400"
  >
    <Icon :icon="icon" class="text-2xl text-white" />

    {{ title }}
  </RouterLink>
</template>

<script>
export default {
  name: 'ButtonSecondaryIconComponent'
}
</script>
