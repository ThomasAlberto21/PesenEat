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
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
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
