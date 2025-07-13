<template>
  <section
    class="hero bg-no-repeat bg-center bg-cover text-white text-center h-[90vh] overflow-hidden flex items-center justify-center px-4"
    :style="{ backgroundImage: `url('${image}')` }"
  >
    <div class="max-w-5xl mx-auto transform -translate-y-8 md:-translate-y-16 px-4">
      <h1
        class="font-ameda text-[42px] sm:text-[64px] md:text-[100px] font-normal leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.19)] break-words"
      >
        {{ title }}
      </h1>
      <p
        class="font-montserrat text-[18px] sm:text-[20px] md:text-[23.56px] font-normal leading-[1.4] mt-4 tracking-wide drop-shadow-sm"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
})
</script>
