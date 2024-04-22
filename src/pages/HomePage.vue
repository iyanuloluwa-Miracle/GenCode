<template>
    <div>
      <Navbar/>
      <HeroSection/>
      <Sponsorship/>
      <OurServices/>

      <Footer/>
      
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Layout/Navbar.vue';
  import Footer from '../components/Layout/Footer.vue';
  import HeroSection from '../components/Layout/HeroSection.vue';
  import Sponsorship from '../components/Layout/Sponsorship.vue';
  import OurServices from '../components/Layout/OurServices.vue';

  export default {
    components: {
      Navbar,
      Footer,
      HeroSection,
      Sponsorship,
      OurServices
    }
  }
  </script>
  
  <style scoped>
  /* Component styles go here */
  </style>
  