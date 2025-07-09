<template>
  <div>
    <Navbar />
  <HeroSection
    title="Garancija kakovosti"
    subtitle="VODOVOD RESTANJ – MALI KAMEN"
    :image="analysisImage"
  /> 
    <AnalysisSection />
    <!-- <QuoteSection /> -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AnalysisSection from '@/components/AnalysisSection.vue'
import QuoteSection from '@/components/QuoteSection.vue'
import Footer from '@/components/Footer.vue'

import analysisImage from '@/assets/images/img-analiza.jpeg'

</script>