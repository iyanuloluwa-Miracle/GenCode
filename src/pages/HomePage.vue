<template>
    <div>
      <Navbar/>
      <HeroSection/>
      <Sponsorship/>
      <p>other components Loading</p>
      <Footer/>
      
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Layout/Navbar.vue';
  import Footer from '../components/Layout/Footer.vue';
  import HeroSection from '../components/Layout/HeroSection.vue';
  import Sponsorship from '../components/Layout/Sponsorship.vue';
  export default {
    components: {
      Navbar,
      Footer,
      HeroSection,
      Sponsorship
    }
  }
  </script>
  
  <style scoped>
  /* Component styles go here */
  </style>
  