<template>
  <section class="bg-[#F3FAFD]">
    <Navbar />
    <FaqComponent />
  </section>
</template>

<script>
import Navbar from "../../src/components/Layout/Navbar.vue";
import FaqComponent from "../components/FaqComponent/FaqComponent.vue";

export default {
  components: {
    Navbar,
    FaqComponent,
  },
};
</script>

<style scoped></style>
