<template>
  <div>
    <h2
      class="text-[56px] text-center mt-9 text-[#272E31] font-medium servicesComponent"
    >
      Our Services
    </h2>
    <p class="text-[16px] text-center text-[#2B2121] serviceComponent">
      We always want to provide the best value for you. GenCode gives you the
      best experience while you<br />generate your QR code
    </p>

    <div class="image flex justify-center items-center">
      <img src="../../assets/images/Barcode.svg" alt="Bar_code scannner" />
    </div>


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
    <div class="flex justify-center items-center mt-10 mb-10 scan-button">
        <a class="flex items-center gap-9" href="#">
          <button
            class="capitalize text-[12px] font-bold rounded p-3 cursor-pointer transition-all duration-150 ease-in transform text-black01 bg-Till10101 hover:bg-blue01 w-60 hover:text-whites"
          >
            Generate QR code
          </button>
        </a>
      </div>
  </div>
</template>

<script></script>

<style>
@media (max-width: 768px) {
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .servicesComponent {
    font-size: 26px;
    text-align: center;
    margin-left: 15px;
  }
  .serviceComponent {
    text-align: center;
    margin-left: 15px;
    font-size: 12px;
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
