<script setup>
import ImageLayout from '@/views/Login/layout/Image.vue'
import FormLayout from '@/views/Login/layout/Form.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <ImageLayout />

      <div class="lg:w-6/12 xl:w-6/12 p-6 sm:p-12">
        <FormLayout />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>
