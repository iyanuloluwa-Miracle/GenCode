<template>
    <div>
      <Navbar/>
      <HeroSection/>
      <Sponsorship/>
      <OurServices/>
      <QrGuide/>
      <Testimonial/>
      <MoreAboutProduct/>
      

      <Footer/>
      
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Layout/Navbar.vue';
  import Footer from '../components/Layout/Footer.vue';
  import HeroSection from '../components/Layout/HeroSection.vue';
  import Sponsorship from '../components/Layout/Sponsorship.vue';
  import OurServices from '../components/Layout/Services.vue';
  import QrGuide from '../components/Layout/QrGuide.vue';
  import Testimonial from '../components/Layout/Testimonial.vue'
  import MoreAboutProduct from '../components/Layout/MoreAboutProduct.vue';

  export default {
    components: {
      Navbar,
      Footer,
      HeroSection,
      Sponsorship,
      OurServices,
      QrGuide,
      Testimonial,
      MoreAboutProduct
    }
  }
  </script>
  
  <style scoped>
  /* Component styles go here */
  </style>
  