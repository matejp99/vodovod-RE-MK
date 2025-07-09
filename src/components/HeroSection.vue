<template>
  <section
    class="hero bg-cover bg-center text-white text-center h-[90vh] flex items-center justify-center px-4"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-light leading-tight drop-shadow-md">
        {{ title }}
      </h1>
      <p class="text-base md:text-lg mt-4 tracking-wide drop-shadow-sm">
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
