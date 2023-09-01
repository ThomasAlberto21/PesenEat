<script setup>
import { RouterLink } from 'vue-router'

defineProps({
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
    class="inline-flex items-center justify-center w-full gap-2 py-4 mt-5 mr-3 text-base font-bold text-center text-white bg-yellow-400 rounded-lg px-7 hover:bg-yellow-500"
  >
    {{ title }}
  </RouterLink>
</template>

<script>
export default {
  name: 'ButtonPrimaryComponent'
}
</script>
