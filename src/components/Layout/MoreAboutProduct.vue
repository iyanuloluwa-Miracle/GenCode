<template>
  <section class="mt-[50px]">
    <div class="bg-[#EBF9FC] rounded-[10px] mx-40 scan-wrapper">
      <h4 class="text-[54px] text-center mt-9 text-blue01 font-medium scan-material">
        Instantly scan your materials for free
      </h4>
      <p class="text-[24px] text-center text-[#4D7179] scan-paragraph">
        Add editable and trackable QR codes on anything you <br />
        want with full branding and customization features
      </p>

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
  </section>
</template>

<script></script>

<style>
 @media (max-width:768px){
    .scan-wrapper{
        width: 90%;
        
    }
    .scan-material{
        font-size: 24px;
        text-align: left;
    }
    .scan-paragraph{
        font-size: 14px;
        text-align: left;
    }
    
  }
</style>

