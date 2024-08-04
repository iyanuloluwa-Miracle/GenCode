<template>
  <footer class="bg-[#2E666D] py-16 pr-5 lg:pr-0 footer-section">
    <section
      class="max-w-7xl mx-auto flex flex-col space-x-28 md:flex-row lg:flex-row"
    >
      <div class="footer-wrapper mb-8 lg:mb-0">
        <div>
          <img
            src="../../assets/icons/Group 2270.svg"
            alt="Gencode Logo"
            class="footer-picture"
          />
          <figure class="flex gap-7 ml-[77px] footer-images">
            <img
              src="../../assets/icons/ri-linkedin-line.svg"
              alt="Gencode Logo"
            />
            <img
              src="../../assets/icons/ri-twitter-line.svg"
              alt="Gencode Logo"
            />
            <img src="../../assets/icons/Instagram.svg" alt="Gencode Logo" />
          </figure>
        </div>
      </div>

      <section
        class="grid grid-cols-2 place-content-center md:grid-cols-3 lg:grid-cols-4"
      >
        <section class="mb-5 lg:mb-0">
          <h4 class="text-[27px] text-[#FFFF] font-semibold mb-2">About</h4>
          <ul class="footer-section-one leading-loose">
            <li class="text-[16px] text-[#FFFF] font-regular">About Us</li>
            <li class="text-[16px] text-[#FFFF] font-regular">Our Services</li>
            <li class="text-[16px] text-[#FFFF] font-regular">Contact Us</li>
            <li class="text-[16px] text-[#FFFF] font-regular">Support</li>
          </ul>
        </section>

        <section>
          <h4 class="text-[27px] text-[#FFFF] font-semibold mb-2">Product</h4>
          <ul class="footer-section-two leading-loose">
            <li class="text-[16px] text-[#FFFF] font-regular">Why Gencode</li>
            <li class="text-[16px] text-[#FFFF] font-regular">How it works</li>
            <li class="text-[16px] text-[#FFFF] font-regular">APIS</li>
          </ul>
        </section>

        <section>
          <h4 class="text-[27px] text-[#FFFF] font-semibold mb-2">Support</h4>
          <ul class="footer-section-three leading-loose">
            <li class="text-[16px] text-[#FFFF] font-regular">Terms to use</li>
            <li class="text-[16px] text-[#FFFF] font-regular">Privacy</li>
            <li class="text-[16px] text-[#FFFF] font-regular">FAQS</li>
            <li class="text-[16px] text-[#FFFF] font-regular">Support</li>
          </ul>
        </section>

        <section>
          <h4 class="text-[27px] text-[#FFFF] font-semibold mb-2">
            Contact Us
          </h4>
          <div class="footer-section-four">
            <p class="text-[16px] text-[#FFFF] font-regular mb-5">
              Send an email and get a response from us
            </p>

            <a href="https://www.buymeacoffee.com/DinaIyanu" target="_blank"
              ><img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
                alt="Buy Me A Coffee"
                style="height: 60px !important; width: 217px !important"
            /></a>
          </div>
        </section>
      </section>
    </section>
  </footer>
</template>

<script></script>

<style scoped>
@media (max-width: 768px) {
  .footer-section {
    display: flex;
    flex-direction: column;
  }
}
</style>
