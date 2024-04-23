<template>
  <section class="bg-[#F3FAFD] mt-14 mb-16">
    <h2
      class="text-[56px] text-center mt-9 text-[#2B2121] font-medium services"
    >
      Our Services
    </h2>
    <p class="text-[14px] md:text-[24px] text-center text-[#2B2121] service">
      We always want to provide the best value for you. Gencode gives you the
      best experience while you <br />generate your QR Code
    </p>
  

    <div class="flex mt-5 ml-9 justify-evenly items-center flex-wrap wrapper-cards">
      <div class=" bg-whites rounded-[16px] hover:bg-[#76D4DF] cards">
        <img src="../../assets/icons/padlock.svg" alt="padlock" width="35" class="ml-10 mt-8"/>
       <h4 class="text-[40px] font-semibold px-10 mt-5 text-[#12292B] card-heading4">Business and <br>Portfolio Visibility</h4>
       <p class="text-[18px] px-10 pt-2 text-[#1E4448] card-paragraph">We give you an online presence so <br>your customers find you on the <br> world wide web. Encrypt your <br> portfolio's URL with us</p>

      </div>

      <div class=" bg-whites rounded-[16px] hover:bg-[#76D4DF]">
        <img src="../../assets/icons/barcode.svg" alt="barcode" width="35" class="ml-10 mt-8"/>
        <h4 class="text-[40px] font-semibold px-10 mt-5 text-[#12292B] card-heading4">Identity<br>Authentication</h4>  
        <p class="text-[18px] px-10 pt-2 text-[#1E4448] card-paragraph">We provide you with an internet<br>presence so that customers may<br>locate you online. We can encrypt<br>the URL for your portfolio.</p>

      </div>

      <div class="rounded-[16px] bg-whites hover:bg-[#76D4DF]">
        <img src="../../assets/icons/user.svg" alt="user" width="35" class="ml-10 mt-8"/>
        <h4 class="text-[40px] font-semibold px-10 mt-5 text-[#12292B] card-heading4">Improved<br>Communication</h4>
        <p class="text-[18px] px-10 pt-2 text-[#1E4448] card-paragraph">Confidential messages,Information <br> and the most sensitive documentation <br>can be communicated <br>in text</p>

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
    text-align: center;
    margin-left: 15px;
  }
  .service {
    text-align: center;
    margin-left: 15px;
  }
  .card-heading4{
    font-size: 24px;

  }
  .card-paragraph{
     font-size: 16px;

  }
  .wrapper-cards{
    width: 90%;
    gap: 30px;

  }
  

}
</style>
