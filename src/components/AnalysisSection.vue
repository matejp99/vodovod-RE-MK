<template>
  <section class="bg-[#f9f5ef] py-20 px-8 md:px-16">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:gap-16">
      <!-- Left column: match width with the cards section -->
      <div class="basis-[28rem] shrink-0">
        <p class="uppercase text-green-900 text-sm">Naša zaveza kakovosti</p>
        <h2 class="text-4xl text-green-900 font-ameda mb-4">Poročila</h2>
        <p class="text-gray-600 text-sm">
          Naša prva skrb je varna in kakovostna voda za vse krajane. Zaradi popolne transparentnosti tukaj javno objavljamo vsa uradna poročila in s tem krepimo medsebojno zaupanje.  
        </p>

        <div class="mt-8">
          <p class="font-semibold text-lg text-gray-700 mb-2">Izberite leto:</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="year in Object.keys(reports).sort((a,b)=>b-a)" :key="year">
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
        <div v-for="(pdf, name) in reports[selectedYear]" :key="name">
          <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ name }}</h3>
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
  2024: { "Letno poročilo 2024": 'letno_porocilo_2024.pdf' },
  2025: {
    "Analiza februar": 'Analiza februar 2025.pdf',
    "Analiza junij": 'Analiza junij_2025.pdf',
    "Analiza julij": 'Analiza julij _2025.pdf',
    "Analiza oktober": 'Analiza_oktober_2025.pdf',
    "Analiza oktober - Mestna občina Krško": '25-110220_Pitna-voda---Mali-Kamen-21.pdf',
    "Letno poročilo 2025": 'letno_porocilo_2025.pdf',
    "Poročilo o kakovosti pitne vode za leto 2025": 'porocilo_o_kakovosti_2025.pdf'
  },
  2026: {
    "Analiza februar": 'Analiza februar 2026.pdf'
  },
}
const selectedYear = ref(2026)
</script>
