<template>
  <section class="bg-[#f9f5ef] py-20 px-8 md:px-16">
    <div class="flex flex-col md:flex-row md:items-start md:gap-16">
      <!-- Left column -->
      <div class="max-w-md">
        <p class="uppercase text-green-900 text-sm">Naša zaveza kakovosti</p>
        <h2 class="text-4xl text-green-900 font-ameda mb-4">Analiza</h2>
        <p class="text-gray-600 text-sm">
          Naša prva skrb je varna in kakovostna voda za vse krajane. Zaradi popolne transparentnosti tukaj javno objavljamo vsa uradna poročila o analizah in s tem krepimo medsebojno zaupanje.
        </p>

        <div class="mt-8">
          <p class="font-semibold text-lg text-gray-700 mb-2">Izberite leto:</p>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="year in Object.keys(reports).sort((a, b) => b - a)"
              :key="year"
            >
              <button
                class="px-4 py-1 rounded-full text-sm border"
                :class="{
                  'bg-green-800 text-white': +year === selectedYear,
                  'bg-white text-gray-700': +year !== selectedYear,
                }"
                @click="selectedYear = +year"
              >
                {{ year }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right column (Reports) -->
      <div class="grid grid-cols-1 gap-6 mt-10 md:mt-0 flex-1">
        <div
          v-for="(pdf, month) in reports[selectedYear]"
          :key="month"
          class=""
        >
          <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ month }}</h3>
          <a
            :href="`${baseURL}${pdf}`"
            target="_blank"
            class="inline-block border px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Odpri poročilo (PDF) →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const baseURL = import.meta.env.BASE_URL

const reports = {
  2025: {
    Februar: 'Analiza februar 2025.pdf',
    Junij: 'Analiza junij_2025.pdf',
    Julij: 'Analiza julij _2025.pdf',
  },
  // 2024: {
  //   Januar: '2024-januar.pdf',
  //   Februar: '2024-februar.pdf',
  //   Marec: '2024-marec.pdf',
  // },
  // 2023: {
  //   April: '2023-april.pdf',
  //   Maj: '2023-maj.pdf',
  // },
}

const selectedYear = ref(2025)
</script>
