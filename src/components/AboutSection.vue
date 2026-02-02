<template>
  <section class="py-24 bg-green-950 text-white text-center px-6">
    <div class="max-w-4xl mx-auto mb-12">
      <h2 class="font-ameda text-[64px] md:text-[72px] leading-tight mb-6">O nas</h2>
      <p class="font-montserrat text-[18px] md:text-[20px] leading-relaxed">
        Naš vodovodni sistem je veliko več kot zgolj cevi – je uresničena vizija skupnosti, ki verjame v trajnost in povezanost.
        <span class="font-semibold italic">Naše domove, kmetije in prihodnost življenja v naši skupnosti.</span>
      </p>
    </div>

    <!-- Images + Widget layout -->
    <div class="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 items-start justify-items-center">
      <!-- Slider 1 -->
      <div class="w-[361px] h-[450px] relative overflow-hidden rounded-xl shadow-lg">
        <transition-group name="slide" tag="div" class="h-full w-full relative">
          <img
            v-if="currentImage"
            :key="`one-${currentImage}`"
            :src="currentImage"
            alt="Galerija 1"
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
        </transition-group>
      </div>

      <!-- Slider 2 -->
      <div class="w-[361px] h-[450px] relative overflow-hidden rounded-xl shadow-lg">
        <transition-group name="slide" tag="div" class="h-full w-full relative">
          <img
            v-if="currentImage2"
            :key="`two-${currentImage2}`"
            :src="currentImage2"
            alt="Galerija 2"
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
        </transition-group>
      </div>

      <!-- <aside class="w-full max-w-sm bg-white/5 text-left rounded-2xl p-6 shadow-xl">
        <h3 class="font-ameda text-3xl mb-3">Naše vrednote</h3>
        <p class="font-montserrat text-base leading-relaxed mb-5">
          Skupaj skrbimo za zanesljivo oskrbo z vodo, preglednost in trajnostni razvoj.
        </p>
        <ul class="space-y-2 font-montserrat text-sm">
          <li class="flex items-start gap-2">
            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Trajnost in odgovornost
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Skupnost in sodelovanje
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Zanesljivost in transparentnost
          </li>
        </ul>
        <button
          class="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition font-semibold"
        >
          Več o projektu
        </button>
      </aside> -->
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import img1 from '@/assets/images/img-onas1.jpeg'
import img2 from '@/assets/images/img-onas2.jpeg'
import img3 from '@/assets/images/img-onas3.jpeg'
import img4 from '@/assets/images/img-onas4.jpeg'

import img5 from '@/assets/images/img-onas5.jpeg'
import img6 from '@/assets/images/img-onas6.jpeg'
import img7 from '@/assets/images/img-onas7.jpeg'
import img8 from '@/assets/images/img-onas8.jpeg'

const images = [img1, img2, img3, img4]
const images2 = [img5, img6, img7, img8]

// separate indices so they can advance independently (or desync nicely)
const currentIndex = ref(0)
const currentIndex2 = ref(0)

const currentImage = computed(() => images[currentIndex.value])
const currentImage2 = computed(() => images2[currentIndex2.value])

let intervalId
let intervalId2

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 3000)

  intervalId2 = setInterval(() => {
    currentIndex2.value = (currentIndex2.value + 1) % images2.length
  }, 3200) // slight offset feels more dynamic
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
  clearInterval(intervalId2)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}
.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
