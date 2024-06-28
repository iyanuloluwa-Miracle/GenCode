<template>
   <section class="bg-[#F3FAFD]">

    <Navbar/>
    <ServicesComponentVue/>
    <FooterVue/>
    
   </section>
</template>

<script>
   import Navbar from '../../src/components/Sections/Navbar.vue'
   import FooterVue from '../components/Sections/Footer.vue'
   import ServicesComponentVue from '../components/ServiceComponent/ServicesComponent.vue'

   
   export default {
    components: {
    Navbar,
    ServicesComponentVue,
    FooterVue
  }
}
</script>

<style scoped>

</style>