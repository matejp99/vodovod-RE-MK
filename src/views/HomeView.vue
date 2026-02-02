<template>
  <Navbar />
  <HeroSection
    title="Voda, ki nas povezuje"
    subtitle="VODOVOD REŠTANJ – MALI KAMEN"
    :image="homeImage"
  />  
  <AboutSection />
  <!-- <ServicesGrid /> -->
  <GuaranteeSection/>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import GuaranteeSection from '@/components/GuaranteeSection.vue'
import AnalysisSection from '@/components/AnalysisSection.vue'
import Footer from '@/components/Footer.vue'

//import homeImage from '@/assets/images/img-welcome.jpeg'
import homeImage from '@/assets/images/img-mali-kamen.jpg'

</script>