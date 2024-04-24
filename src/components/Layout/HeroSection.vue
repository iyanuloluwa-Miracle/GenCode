<template>
  <section class="bg-[#F3FAFD] flex items-center justify-around flex-wrap">
    <div>
      <h2 class="lg:text-[64px] text-[#2B2121] font-medium text-[32px] md:text-center md:text-[50px] text-center">
        Get The Most of Your <br />Information Secured
      </h2>
      <p class="lg:text-[30px] text-[14px] text-[#1D1616] text-center">
        Generate,save and utilize your digital QR codes.
      </p>

      <div class="flex items-center flex-wrap gap-10 pt-10 md:flex justify-center item-center">
        <a class="flex items-center gap-9" href="#">
          <button
            class="capitalize text-[12px] font-bold rounded p-3 cursor-pointer transition-all duration-150 ease-in transform text-black01 bg-Till10101 hover:bg-blue01 w-60 hover:text-whites"
          >
            Generate QR code
          </button>
        </a>

        <a class="flex items-center gap-9" href="#">
          <button
            class="capitalize rounded p-3 cursor-pointer text-[12px] font-bold transition-all duration-150 ease-in transform bg-whites text-blue01 border-[1px] border-Till10101 hover:bg-Aqua hover:text-whites hover:text-white w-60"
          >
            Watch Tutorial
          </button>
        </a>
      </div>
    </div>
    <div class="image">
      <img src="../../assets/images/Barcode.svg" alt="Bar_code scannner"/>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
  @media (max-width:768px){
   .image{
    width:100%;
   }   
  }

</style>
