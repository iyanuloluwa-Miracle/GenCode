<template>
   <section class="bg-[#F3FAFD]">

    <Navbar/>
    <ServicesComponentVue/>
    <FooterVue/>
    
   </section>
</template>

<script>
    import Navbar from '../components/Navbar/Navbar.vue'
   import FooterVue from '../components/Footer/Footer.vue'
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