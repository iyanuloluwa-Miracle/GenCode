<template>
  <div class="flex ml-20 mt-10">
    <div>
      <div class="flex items-center gap-2">
        <img src="../../assets/icons/Dashboard.svg" alt="Dashboard Logo" />
        <p class="text-[#214953] font-semibold text-[40px]">Dashboard</p>
      </div>
      <div class="flex items-center gap-2 mt-11">
        <img src="../../assets/icons/profile.svg" alt="Dashboard Logo" />
        <p class="text-[#37798A] font-regular text-[32px]">Profile</p>
      </div>

      <div class="flex items-center gap-2 mt-11">
        <img src="../../assets/icons/viewQRcode.svg" alt="Dashboard Logo" />
        <p class="text-[#37798A] font-regular text-[32px]">View QR Codes</p>
      </div>

      <div class="flex items-center gap-2 mt-11">
        <img src="../../assets/icons/Settings-alt.svg" alt="Dashboard Logo" />
        <p class="text-[#37798A] font-regular text-[32px]">Settings</p>
      </div>

      <div class="flex items-center gap-2 mt-11">
        <img src="../../assets/icons/help-circle.svg" alt="Dashboard Logo" />
        <p class="text-[#37798A] font-regular text-[32px]">Help and Support</p>
      </div>

      <div class="mt-9 flex flex-col gap-5">
        <div>
          <button
            class="bg-whites border-[1px] border-Till10101 flex items-center justify-center px-4 py-4 text-[#2E666D] text-[24px] font-bold rounded-lg shadow-md gap-4"
          >
            <img src="../../assets/icons/Home.svg" alt="home" />
            Back to Home
          </button>
        </div>

        <div>
          <button
            class="bg-whites border-[1px] border-Till10101 flex items-center justify-center px-14 py-2 text-[#DF4D4D] text-[24px] font-bold rounded-lg shadow-md gap-4"
          >
            <img src="../../assets/icons/Logout.svg" alt="home" />
            Logout
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-[-8px] ml-36">
      <div>
        <h3 class="text-[#1D1616] text-[56px] font-semibold">
          Generate QR Code
        </h3>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex gap-10">
          <div class="flex items-center gap-2">
            <img src="../../assets/icons/url.svg" alt="url" />
            <p class="text-[#1D1616] text-[24px]">URL</p>
          </div>

          <div class="flex items-center gap-2">
            <img src="../../assets/icons/text.svg" alt="text" />
            <router-link to="/text-dashboard" class="text-[#1D1616] text-[24px]">TEXT</router-link>
          </div>

          <div class="flex items-center gap-2">
            <img src="../../assets/icons/email.svg" alt="email" />
            <router-link to="/email-dashboard" class="text-[#1D1616] text-[24px]">EMAIL</router-link>
          </div>

          <div class="flex items-center gap-2">
            <img src="../../assets/icons/contact card.svg" alt="contact card" />
            <router-link to="/contact-dashboard" class="text-[#1D1616] text-[24px]">CONTACT CARD</router-link>
          </div>

          <div class="flex items-center gap-1">
            <img src="../../assets/icons/event.svg" alt="event" />
            <router-link to="/event-dashboard" class="text-[#1D1616] text-[24px]">EVENT</router-link>
          </div>
        </div>

        <div class="flex gap-10">
          <div class="flex items-center gap-2">
            <img src="../../assets/icons/X.svg" alt="twitter" />
            <router-link to="/twitter-dashboard" class="text-[#1D1616] text-[24px]">TWITTER</router-link>
          </div>

          <div class="flex items-center gap-2">
            <img src="../../assets/icons/youtube.svg" alt="url" />
            <router-link to="/youtube-dashboard" class="text-[#1D1616] text-[24px]">YOUTUBE</router-link>
          </div>

          <div class="flex items-center gap-2">
            <img src="../../assets/icons/facebook.svg" alt="url" />
            <router-link to="/facebook-dashboard" class="text-[#1D1616] text-[24px]">FACEBOOK</router-link>
          
          </div>
        </div>

        <div class="flex flex-col gap-10">
          <div class="flex gap-10 mt-9">
            <p class="text-[20px]">Document Name</p>
            <input
              class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-[60%] h-11 px-3 transition-all duration-300 ease-linear"
              type="text"
              placeholder="Graphic Portfolio"
              required=""
              name="password"
              value=""
            />
          </div>

          <div class="flex gap-10">
            <p class="text-[20px]">Submit URL/Text</p>
            <input
              class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-[60%] h-11 px-3 transition-all duration-300 ease-linear"
              type="text"
              placeholder="www.xyz.com"
              required=""
              name="password"
              value=""
            />
          </div>

          <div class="flex items-center justify-center">
            <a class="flex items-center gap-9" href="#">
              <button
                class="capitalize text-[12px] font-bold rounded p-3 cursor-pointer transition-all duration-150 ease-in transform text-black01 bg-Till10101 hover:bg-blue01 w-80 hover:text-whites"
                @click="generateQrCode"
              >
                Generate QR code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

  
  </div>
</template>


<script>
export default {
  methods: {
    generateQrCode() {
      const value = 'Your QR code value';  // Replace with actual value from input fields
      this.$emit('generateQrCode', value);
    },
  },
};
</script>


<style scoped>
@media (max-width: 768px) {




}

</style>
