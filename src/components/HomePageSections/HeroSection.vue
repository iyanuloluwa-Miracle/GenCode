<template>
  <section
    class="bg-[#F3FAFD] flex items-center justify-evenly flex-wrap mb-28 py-10 lg:flex-nowrap"
  >
    <div>
      <h2
        class="lg:text-6xl text-RaisinBlack font-medium text-3xl md:text-center md:text-5xl text-center mb-5 leading-normal lg:max-w-2xl"
      >
        Get The Most of Your Information Secured
      </h2>
      <p class="md:text-2xl text-sm text-Licorice text-center">
        Generate,save and utilize your digital QR codes.
      </p>

      <div
        class="flex items-center flex-wrap gap-10 pt-10 mb-10 justify-center item-center lg:flex-nowrap lg:mb-0"
      >
        <a class="flex items-center gap-9" href="#">
          <button
            class="text-sm capitalize font-bold rounded p-3 cursor-pointer transition-all duration-150 ease-in transform text-Licorice bg-TiffanyBlue hover:bg-PaynesGray w-60 hover:text-white lg:text-base"
          >
            Generate QR code
          </button>
        </a>

        <a class="flex items-center gap-9" href="#">
          <button
            class="text-sm capitalize rounded p-3 cursor-pointer font-bold transition-all duration-150 ease-in transform bg-white text-Teal border-[1px] border-TiffanyBlue hover:bg-PaynesGray hover:text-white w-60 lg:text-base"
          >
            Watch Tutorial
          </button>
        </a>
      </div>
    </div>
    <figure class="max-w-xs md:max-w-full lg:max-w-md">
      <img
        src="../../assets/images/QR Code Cube.png"
        alt="Bar_code scannner"
        class="animate-spin-slow"
      />
    </figure>
  </section>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 768px) {
}

/* .rotate-image-continuously {
  animation: rotate360 2s linear infinite;
}

@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
} */
</style>
