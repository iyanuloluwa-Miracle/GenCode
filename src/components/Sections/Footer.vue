<template>
  <footer class="bg-Teal py-16 pr-5 lg:pr-0 footer-section">
    <section
      class="max-w-7xl mx-auto flex flex-col space-x-28 md:flex-row lg:flex-row"
    >
      <div class="footer-wrapper mb-8 lg:mb-0">
        <figure>
          <img
            src="../../assets/icons/Group 2270.svg"
            alt="Gencode Logo"
            class="footer-picture"
          />
          <figure class="flex items-center justify-center space-x-8">
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
        </figure>
      </div>

      <section
        class="grid grid-cols-1 place-content-center md:grid-cols-3 lg:grid-cols-4"
      >
        <section class="mb-5 lg:mb-0">
          <h4 class="text-3xl text-white font-semibold mb-2">About</h4>
          <ul class="leading-loose">
            <li class="text-white">About Us</li>
            <li class="text-white">Our Services</li>
            <li class="text-white">Contact Us</li>
            <li class="text-white">Support</li>
          </ul>
        </section>

        <section class="mb-5 lg:mb-0">
          <h4 class="text-3xl text-white font-semibold mb-2">Product</h4>
          <ul class="leading-loose">
            <li class="text-white">Why Gencode</li>
            <li class="text-white">How it works</li>
            <li class="text-white">APIS</li>
          </ul>
        </section>

        <section class="mb-5 lg:mb-0">
          <h4 class="text-3xl text-white font-semibold mb-2">Support</h4>
          <ul class="leading-loose">
            <li class="text-white">Terms to use</li>
            <li class="text-white">Privacy</li>
            <li class="text-white">FAQS</li>
            <li class="text-white">Support</li>
          </ul>
        </section>

        <section>
          <h4 class="text-3xl text-white font-semibold mb-2">Contact Us</h4>
          <div>
            <p class="text-white mb-5">
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
