<template>
    <section class="bg-[#F3FAFD]">
        <Navbar/>
        <ContactUsComponent/>
        <FooterVue/>
    </section>

   
</template>

<script>

    import Navbar from '../components/Navbar/Navbar.vue'
    import ContactUsComponent from '../components/ContactUs/ContactUsComponent.vue'
    import FooterVue from '../components/Footer/Footer.vue'


    export default {
        components: {
            Navbar,
            ContactUsComponent,
            FooterVue
        
    }
}
</script>

<style scoped>

</style>