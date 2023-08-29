<script setup>
import { restaurants } from '../../../constants/constants'
import { Rating } from 'flowbite-vue'
</script>

<template>
  <swiper
    :slidesPerView="'auto'"
    :loop="true"
    :pagination="{
      clickable: true
    }"
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
      <div
        :style="{ backgroundImage: `url(${item.image})` }"
        class="mx-1 bg-center bg-no-repeat bg-cover rounded-lg md:mx-0 p-7 md:p-10"
      >
        <div class="flex items-center gap-5 mt-2 bg-white shadow-2xl rounded-xl p-9">
          <img
            :src="item.logo"
            :alt="item.title"
            class="w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32"
          />

          <div class="block w-screen">
            <h3 class="text-lg font-semibold text-black text-start">{{ item.title }}</h3>

            <div class="items-center justify-between block md:flex xl:flex">
              <Rating :rating="5" :scale="5" review-link="#">
                <template #besideText>
                  <h2 class="ml-2 text-lg font-bold text-gray-600">({{ item.rating }})</h2>
                </template>
              </Rating>

              <div
                :class="
                  item.open
                    ? 'bg-green-500 text-white font-semibold px-4 py-2 rounded-md'
                    : 'bg-red-500 text-white font-semibold px-4 py-2 rounded-md'
                "
              >
                {{ item.open ? 'Open' : 'Close' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

export default {
  name: 'CardRestaurantComponent',

  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    return {
      modules: [Autoplay, Pagination]
    }
  }
}
</script>
