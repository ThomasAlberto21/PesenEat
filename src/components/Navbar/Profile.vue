<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div
    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  >
    <button type="button" class="relative p-1 text-gray-400 rounded-full">
      <span class="absolute -inset-1.5" />
      <span class="sr-only">View notifications</span>

      <Icon icon="mdi:cart" class="w-6 h-6 text-gray-800" aria-hidden="true" />
    </button>

    <!-- Profile dropdown -->
    <Menu as="div" class="relative ml-3">
      <div>
        <MenuButton
          class="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500"
        >
          <span class="absolute -inset-1.5" />
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
