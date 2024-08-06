<template>
  <section>
    <section class="max-w-7xl mx-auto px-5 lg:px-0">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="font-bold text-4xl mb-3">Our Services</h2>
        <p class="md:text-xl lg:max-w-4xl mx-auto leading-normal">
          We always want to provide the best value for you. Gencode gives you
          the best experience while you generate your QR Code
        </p>
      </div>
      <div class="image flex justify-center items-center">
        <img src="../../assets/images/Barcode.svg" alt="Bar_code scannner" class="rotate-image-continuously" />
      </div>

      <section class="flex items-center flex-wrap gap-10 lg:flex-nowrap">
        <div class="bg-whites p-10 rounded-md shadow-md hover:bg-[#76D4DF] lg:max-w-sm">
          <img src="../../assets/icons/padlock.svg" alt="padlock" width="35" class="mb-5" />
          <h4 class="text-2xl font-semibold mb-5 lg:text-4xl lg:max-w-xs">
            Business and Portfolio Visibility
          </h4>
          <p class="leading-normal">
            We give you an online presence so your customers find you on the
            world wide web. Encrypt your portfolio's URL with us
          </p>
        </div>

        <div class="bg-whites p-10 rounded-md shadow-md hover:bg-[#76D4DF] lg:max-w-sm">
          <img src="../../assets/icons/barcode.svg" alt="barcode" width="35" class="mb-5" />
          <h4 class="text-2xl font-semibold mb-5 lg:text-4xl lg:max-w-xs">
            Identity Authentication
          </h4>
          <p class="leading-normal">
            We provide you with an internet presence so that customers may
            locate you online. We can encrypt the URL for your portfolio.
          </p>
        </div>

        <div class="bg-whites p-10 rounded-md shadow-md hover:bg-[#76D4DF] lg:max-w-sm">
          <img src="../../assets/icons/user.svg" alt="user" width="35" class="mb-5" />
          <h4 class="text-2xl font-semibold mb-5 lg:text-4xl lg:max-w-xs">
            Improved Communication
          </h4>
          <p class="leading-normal">
            Confidential messages,Information and the most sensitive
            documentation can be communicated in text
          </p>
        </div>
      </section>
      <div class="flex justify-center items-center mt-10 mb-10 scan-button">
        <a class="flex items-center gap-9" href="#">
          <button
            class="text-sm capitalize font-bold rounded p-3 cursor-pointer transition-all duration-150 ease-in transform text-black01 bg-Till10101 hover:bg-blue01 w-60 hover:text-whites lg:text-base">
            Generate QR code
          </button>
        </a>
      </div>
    </section>
  </section>
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

  .card-heading4 {
    font-size: 24px;
  }
  .card-paragraph {
    font-size: 16px;
  }
  .wrapper-cards {
    width: 90%;
    gap: 30px;
  }
}

.rotate-image-continuously {
  animation: rotate360 2s linear infinite;
}

@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
