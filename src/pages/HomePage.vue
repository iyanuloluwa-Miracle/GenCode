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
   import Navbar from '../components/Navbar/Navbar.vue'
   import Footer from '../components/Footer/Footer.vue'
  import HeroSection from '../components/HomePageSections/HeroSection.vue';
  import Sponsorship from '../components/HomePageSections/Sponsorship.vue';
  import OurServices from '../components/HomePageSections/Services.vue';
  import QrGuide from '../components/HomePageSections/QrGuide.vue';
  import Testimonial from '../components/HomePageSections/Testimonial.vue'
  import MoreAboutProduct from '../components/HomePageSections/MoreAboutProduct.vue';

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
  