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
   import Navbar from '../components/Sections/Navbar.vue'
   import Footer from '../components/Sections/Footer.vue'
  import HeroSection from '../components/Sections/HeroSection.vue';
  import Sponsorship from '../components/Sections/Sponsorship.vue';
  import OurServices from '../components/Sections/Services.vue';
  import QrGuide from '../components/Sections/QrGuide.vue';
  import Testimonial from '../components/Sections/Testimonial.vue'
  import MoreAboutProduct from '../components/Sections/MoreAboutProduct.vue';

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
  