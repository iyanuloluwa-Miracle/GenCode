<template>
  <section class="bg-[#F3FAFD]">
    <Navbar />
    <FaqComponent />
    <FooterVue/>
  </section>
</template>

<script>
import Navbar from "../../src/components/Sections/Navbar.vue";
import FaqComponent from "../components/FaqComponent/FaqComponent.vue";
import FooterVue from '../components/Sections/Footer.vue'

export default {
  components: {
    Navbar,
    FaqComponent,
    FooterVue
  },
};
</script>

<style scoped></style>
