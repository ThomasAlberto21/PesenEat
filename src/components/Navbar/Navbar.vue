<script setup>
import Profile from './Profile.vue'
import NavlinksMobile from './NavlinksMobile.vue'
import NavlinksDesktop from './NavlinksDesktop.vue'
import MobileMenuButton from './MobileMenuButton.vue'
import { menuItem } from '../../constants/constants'
import { navigation } from '../../constants/constants'

import { Disclosure } from '@headlessui/vue'
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow-lg" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <MobileMenuButton :open="open" />

        <!-- NavlinksDesktop -->
        <NavlinksDesktop :navigation="navigation" />

        <!-- Profile -->
        <Profile :menuItem="menuItem" />
      </div>
    </div>

    <!-- NavlinksMobile -->
    <NavlinksMobile :navigation="navigation" />
  </Disclosure>
</template>

<script>
export default {
  name: 'NavbarComponents'
}
</script>
