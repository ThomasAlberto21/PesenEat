<script setup>
import { RouterLink } from 'vue-router'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div
    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  >
    <button type="button" class="relative rounded-full p-1 text-gray-400">
      <span class="absolute -inset-1.5" />
      <span class="sr-only">View notifications</span>

      <ShoppingCartIcon class="h-6 w-6 text-black" aria-hidden="true" />
    </button>

    <!-- Profile dropdown -->
    <Menu as="div" class="relative ml-3">
      <div>
        <MenuButton
          class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500"
        >
          <span class="absolute -inset-1.5" />
          <span class="sr-only">Open user menu</span>
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <RouterLink
            v-for="item in menuItem"
            :key="item.name"
            :to="item.to"
            :class="[
              item.current
                ? 'bg-yellow-500 text-black'
                : 'block text-black hover:text-yellow-500 font-medium',
              'rounded-md px-3 py-2 text-base font-medium '
            ]"
            >{{ item.name }}</RouterLink
          >
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  props: ['menuItem']
}
</script>
