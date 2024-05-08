<template>
  <div class="bg-[#F3FAFD]">
    <DashboardHeader />
    <DashboardBody/>
   
  </div>
</template>

<script>
import DashboardHeader from "../../components/Dashboard/DashboardHeader.vue";
import DashboardBody from "../../components/Dashboard/DashboardBody.vue";

export default {
  components: {
    DashboardHeader,
    DashboardBody

  },
};
</script>

<style scoped></style>
