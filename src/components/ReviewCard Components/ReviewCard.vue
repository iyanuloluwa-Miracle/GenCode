<template>
    <div class="flex justify-center items-center flex-col">
      <img src="../../assets/images/customer2.svg" alt="customer" class="rounded-full object-cover w-120 h-120" />
      <p class="mt-6 max-w-sm text-center text-[18px] text-[#6D6D6D]">{{ feedback }}</p>
      <div class="mt-3 flex justify-center items-center gap-2.5">
        <img src="../../assets/icons/star.svg" width="24" height="24" alt="rating star" class="object-contain m-0" />
        <p class="text-[20px] text-[#6D6D6D] ">({{ rating }})</p>
      </div>
      <h3 class="mt-1 text-[24px] text-[#214953] text-center font-bold">{{ customerName }}</h3>
    </div>
</template>
  
<script>
  export default {
    props: {
      customerName: String,
      rating: Number,
      feedback: String
    }
  };
</script>
  