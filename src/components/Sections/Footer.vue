<template>
  <footer class="bg-[#2E666D] flex items-center justify-evenly footer-section">
    <div class="mt-[40px] footer-wrapper">
      <div>
        <img src="../../assets/icons/Group 2270.svg" alt="Gencode Logo" class="footer-picture" />
        <div class="flex gap-7 ml-[77px] footer-images">
          <img
            src="../../assets/icons/ri-linkedin-line.svg"
            alt="Gencode Logo"
          />
          <img
            src="../../assets/icons/ri-twitter-line.svg"
            alt="Gencode Logo"
          />
          <img src="../../assets/icons/Instagram.svg" alt="Gencode Logo" />
        </div>
      </div>
    </div>
    <div class="footer-section-one">
      <h4 class="text-[27px] text-[#FFFF] font-semibold">About</h4>
      <h6 class="text-[16px] text-[#FFFF] font-regular">About Us</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Our Services</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Contact Us</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Support</h6>
    </div>

    <div class="footer-section-two">
      <h4 class="text-[27px] text-[#FFFF] font-semibold">Product</h4>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Why Gencode</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">How it works</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">APIS</h6>
    </div>

    <div class="footer-section-three">
      <h4 class="text-[27px] text-[#FFFF] font-semibold">Support</h4>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Terms to use</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Privacy</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">FAQS</h6>
      <h6 class="text-[16px] text-[#FFFF] font-regular">Support</h6>
    </div>
    <div class="footer-section-four">
      <h4 class="text-[27px] text-[#FFFF] font-semibold">Contact Us</h4>
      <h6 class="text-[16px] text-[#FFFF] font-regular">
        Send an email and get a response from us
      </h6>

      <a href="https://www.buymeacoffee.com/DinaIyanu" target="_blank"
        ><img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
          alt="Buy Me A Coffee"
          style="height: 60px !important; width: 217px !important"
      /></a>
    </div>
    
  </footer>
  
</template>

<script></script>

<style scoped>
@media (max-width: 768px) {
.footer-section{
  display: flex;
  flex-direction: column;

}
.footer-wrapper{
  margin-left: -150px;
} 

.footer-section-one{
  margin-top: 30px;
  margin-left: -180px;

}

.footer-section-two{
  margin-top: 30px;
  margin-left: -180px; 
}

.footer-section-three{
  margin-top: 30px;
  margin-left: -180px; 
}

.footer-section-four{
  margin-top: 30px;
}

.footer-picture{
  margin-left: -40px;

}
.footer-images{
  margin-left: 50px;

}
}
</style>
