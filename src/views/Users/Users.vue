<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/layout/Navbar/Navbar.vue'
import Footer from '@/layout/Footer/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
export default {
  name: 'UsersView'
}
</script>
