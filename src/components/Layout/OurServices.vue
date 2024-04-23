<template>
  <section class="bg-[#F3FAFD]">
    <h2
      class="text-[56px] text-center mt-9 text-[#2B2121] font-medium services"
    >
      Our Services
    </h2>
    <p class="text-[14px] md:text-[24px] text-center text-[#2B2121] service">
      We always want to provide the best value for you. Gencode gives you the
      best experience while you <br />generate your QR Code
    </p>
  

    <div class="flex justify-between items-center mt-5">
      <div class="rounded bg-whites">
        <img src="../../assets/icons/padlock.svg" alt="padlock" width="35" class="ml-10 mt-8"/>
       <h4 class="text-[40px] font-semibold px-10 mt-5">Business and <br>Portfolio Visibility</h4>
       <p class="text-[18px] px-10 pt-5">We give you an online presence so <br>your customers find you on the <br> world wide web. Encrypt your <br> portfolio's URL with us</p>

      </div>

      <div class="rounded-16 bg-whites">
        <img src="../../assets/icons/barcode.svg" alt="barcode" width="35"/>
        <h4>Business and Portfolio Visibility</h4>  
        <p></p>

      </div>

      <div class="rounded-16 bg-whites">
        <img src="../../assets/icons/user.svg" alt="user" width="35"/>
       <h4>Business and Portfolio Visibility</h4>
       <p>We give you an online presence so your customers find you on the world wide web. Encrypt your portfolio's URL with us</p>

      </div>
     
      

    </div>


  </section>
</template>

<script setup>
</script>

<style scoped>
@media (max-width: 768px) {
  .services {
    font-size: 28px;
    text-align: left;
    margin-left: 15px;
  }
  .service {
    text-align: left;
    margin-left: 15px;
  }
}
</style>
