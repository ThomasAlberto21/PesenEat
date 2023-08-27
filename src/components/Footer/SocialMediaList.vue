<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="sm:flex sm:items-center sm:justify-between">
    <span class="text-md text-white sm:text-center">
      © 2023 <RouterLink to="#" class="hover:underline">Peseneat</RouterLink>. All Rights Reserved.
    </span>
    <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-2xl">
      <RouterLink
        v-for="(socialMedia, index) in footer.mediaSocial"
        :key="index"
        :to="socialMedia.to"
        class="text-white hover:text-gray-300"
      >
        <Icon :icon="socialMedia.icon" aria-hidden="true" />
      </RouterLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SocialMediaListComponent',
  props: ['footer']
}
</script>
