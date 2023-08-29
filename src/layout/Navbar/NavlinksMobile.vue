<script setup>
import { DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <DisclosurePanel class="sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <DisclosureButton
        v-for="item in navigation"
        :key="item.name"
        as="a"
        :href="item.href"
        :class="[
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-black hover:text-yellow-500 font-semibold',
          'block rounded-md px-3 py-2 text-base font-medium'
        ]"
        :aria-current="item.current ? 'page' : undefined"
        >{{ item.name }}</DisclosureButton
      >
    </div>
  </DisclosurePanel>
</template>
<script>
export default {
  name: 'NavlinksMobileComponent',
  props: ['navigation']
}
</script>
