<template>
    <section>
        <Navbar/>
        <ContactUsComponent/>
    </section>

   
</template>

<script>

    import Navbar from '../../src/components/Layout/Navbar.vue'
    import ContactUsComponent from '../components/ContactUs/ContactUsComponent.vue';

    export default {
        components: {
            Navbar,
            ContactUsComponent
        
    }
}
</script>

<style scoped>

</style>