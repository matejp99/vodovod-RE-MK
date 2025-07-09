<template>
  <section class="bg-[#f9f5ef] py-20 px-8 md:px-16 flex flex-col md:flex-row justify-between gap-12">
    <div class="max-w-md">
      <p class="uppercase text-sm">Naša zaveza kakovosti</p>
      <h2 class="text-4xl text-green-900 font-serif mb-4">Analiza</h2>
      <p class="text-gray-600 text-sm">Naša prva skrb je vir in kakovostna voda za vse krajane...</p>
      <div class="mt-8">
        <p class="font-semibold text-lg text-gray-700">2025</p>
        <div class="space-x-2 mt-2">
          <a href="/lion_main.PDF" target="_blank" class="bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm">Report 01</a>
          <a href="/test_pdf.pdf" target="_blank" class="border px-4 py-1 rounded-full text-sm">Report 02</a>
          <a href="/lion_main.PDF" target="_blank" class="border px-4 py-1 rounded-full text-sm">Report 03</a>
        </div>
        <ul class="mt-6 space-y-1 text-gray-500 text-sm">
          <li>2024</li>
          <li>2023</li>
          <li>2022</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-1 text-sm">
      <div v-for="(month, index) in ['Januar', 'Februar', 'Marec', 'April']" :key="month">
        <h3 class="font-semibold text-lg text-gray-800">{{ month }}</h3>
        <a
          :href="`/report0${index + 1}.pdf`"
          target="_blank"
          class="mt-2 border px-4 py-2 rounded-md flex items-center justify-between w-full hover:bg-gray-100 transition"
        >
          Odpri poročilo (PDF)
          <span class="ml-2">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
