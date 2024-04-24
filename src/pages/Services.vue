<template>
   <section class="bg-[#F3FAFD]">

    <Navbar/>
    <ServicesComponentVue/>
    
   </section>
</template>

<script>
   import Navbar from '../../src/components/Layout/Navbar.vue'
   import ServicesComponentVue from '../components/ServiceComponent/ServicesComponent.vue'
   
   export default {
    components: {
    Navbar,
    ServicesComponentVue
  }
}
</script>

<style scoped>

</style>