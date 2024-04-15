<template>
    <div>
      <Navbar/>
      <p>Hello world</p>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Layout/Navbar.vue';
  import Footer from '../components/Layout/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Component styles go here */
  </style>
  