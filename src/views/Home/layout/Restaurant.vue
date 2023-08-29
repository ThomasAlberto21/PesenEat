<script setup>
import 'swiper/css/pagination'
import Button from '@/components/Button.vue'
import CardRestaurant from '@/components/CardRestaurant.vue'
import { restaurants } from '@/constants/constants'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <div class="px-3 mx-auto mb-10 text-center mt-52 max-w-7xl">
    <p class="text-xl font-semibold text-yellow-400">RESTAURANTS</p>
    <h1 class="mb-5 text-4xl font-bold xl:text-7xl">
      Find Your Favorite <br />
      Restaurants
    </h1>

    <swiper
      :slidesPerView="'auto'"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 1,
          spaceBetween: 20
        },
        '1024': {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }"
      @swiper="Swiper"
      @slideChange="onSlideChange"
      class="max-w-screen-xl mySwiper"
    >
      <swiper-slide v-for="item in restaurants" :key="item.id" class="cursor-pointer">
        <CardRestaurant :item="item" />
      </swiper-slide>
    </swiper>

    <Button icon="bi:shop" title="See All Restaurants" to="/restaurants" />
  </div>
</template>

<script>
export default {
  name: 'RestaurantSection'
}
</script>
