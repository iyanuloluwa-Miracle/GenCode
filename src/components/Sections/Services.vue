<template>
  <section class="bg-[#F3FAFD] py-14 mb-28">
    <section class="max-w-7xl mx-auto px-5 lg:px-0">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="font-bold text-4xl mb-3">Our Services</h2>
        <p class="md:text-xl lg:max-w-4xl mx-auto leading-normal">
          We always want to provide the best value for you. Gencode gives you
          the best experience while you generate your QR Code
        </p>
      </div>

      <section class="flex items-center flex-wrap gap-10 lg:flex-nowrap">
        <div
          class="bg-whites p-10 rounded-md shadow-md hover:bg-[#76D4DF] lg:max-w-sm"
        >
          <img
            src="../../assets/icons/padlock.svg"
            alt="padlock"
            width="35"
            class="mb-5"
          />
          <h4 class="text-2xl font-semibold mb-5 lg:text-4xl lg:max-w-xs">
            Business and Portfolio Visibility
          </h4>
          <p class="leading-normal">
            We give you an online presence so your customers find you on the
            world wide web. Encrypt your portfolio's URL with us
          </p>
        </div>

        <div
          class="bg-whites p-10 rounded-md shadow-md hover:bg-[#76D4DF] lg:max-w-sm"
        >
          <img
            src="../../assets/icons/barcode.svg"
            alt="barcode"
            width="35"
            class="mb-5"
          />
          <h4 class="text-2xl font-semibold mb-5 lg:text-4xl lg:max-w-xs">
            Identity Authentication
          </h4>
          <p class="leading-normal">
            We provide you with an internet presence so that customers may
            locate you online. We can encrypt the URL for your portfolio.
          </p>
        </div>

        <div
          class="bg-whites p-10 rounded-md shadow-md hover:bg-[#76D4DF] lg:max-w-sm"
        >
          <img
            src="../../assets/icons/user.svg"
            alt="user"
            width="35"
            class="mb-5"
          />
          <h4 class="text-2xl font-semibold mb-5 lg:text-4xl lg:max-w-xs">
            Improved Communication
          </h4>
          <p class="leading-normal">
            Confidential messages,Information and the most sensitive
            documentation can be communicated in text
          </p>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
@media (max-width: 768px) {
  .services {
    font-size: 28px;
    text-align: center;
    margin-left: 15px;
  }
}
</style>
