<script setup>
import { DisclosureButton } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <!-- Mobile menu button-->
    <DisclosureButton
      class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      <span class="absolute -inset-0.5" />
      <span class="sr-only">Open main menu</span>
      <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
      <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
    </DisclosureButton>
  </div>
</template>
<script>
export default {
  name: 'MobileMenuButton',
  props: ['open']
}
</script>
