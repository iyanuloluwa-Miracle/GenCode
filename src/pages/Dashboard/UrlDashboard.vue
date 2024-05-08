<template>
  <div class="bg-[#F3FAFD]">
    <DashboardHeader />
    <div class="flex">
      <div>
        <div class="flex items-center gap-2">
          <img src="../../assets/icons/Dashboard.svg" alt="Dashboard Logo" />
          <p class="text-[#214953] font-semibold text-[40px]">Dashboard</p>
        </div>
        <div class="flex items-center gap-2 mt-11">
          <img src="../../assets/icons/profile.svg" alt="Dashboard Logo" />
          <p class="text-[#37798A] font-regular text-[32px]">Profile</p>
        </div>
        <hr class="w-60 text-[#AFB1B6]" />

        <div class="flex items-center gap-2 mt-11">
          <img src="../../assets/icons/viewQRcode.svg" alt="Dashboard Logo" />
          <p class="text-[#37798A] font-regular text-[32px]">View QR Codes</p>
        </div>
        <hr class="w-60 text-[#AFB1B6]" />

        <div class="flex items-center gap-2 mt-11">
          <img src="../../assets/icons/Settings-alt.svg" alt="Dashboard Logo" />
          <p class="text-[#37798A] font-regular text-[32px]">Settings</p>
        </div>
        <hr class="w-60 text-[#AFB1B6]" />

        <div class="flex items-center gap-2 mt-11">
          <img src="../../assets/icons/help-circle.svg" alt="Dashboard Logo" />
          <p class="text-[#37798A] font-regular text-[32px]">
            Help and Support
          </p>
        </div>
        <hr class="w-60 text-[#AFB1B6]" />

        <div class="mt-20 flex flex-col gap-5">
          <div>
            <button
              class="bg-whites border-[1px] border-Till10101 flex items-center justify-center px-4 py-4 text-[#2E666D] text-[24px] font-bold rounded-lg shadow-md gap-4"
            >
             <img src="../../assets/icons/Home.svg" alt="home"/>
              Back to Home
            </button>


            
          </div>

          <div>
            <button
              class="bg-whites border-[1px] border-Till10101 flex items-center justify-center px-14 py-2 text-[#DF4D4D] text-[24px] font-bold rounded-lg shadow-md gap-4"
            >
             <img src="../../assets/icons/Logout.svg" alt="home"/>
              Logout
            </button>


            
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div>
            <h3 class="text-[#1D1616] text-[56px] font-semibold">Generate QR Code</h3>

        </div>


        <div class="flex gap-10">
            <div class="flex items-center gap-2">
                <img src="../../assets/icons/url.svg" alt="url"/>
                <p class="text-[#1D1616] text-[24px]">URL</p>
            </div>

            <div class="flex items-center gap-2">
                <img src="../../assets/icons/text.svg" alt="text"/>
                <p class="text-[#1D1616] text-[24px]">TEXT</p>
            </div>

            
            <div class="flex items-center gap-2">
                <img src="../../assets/icons/email.svg" alt="email"/>
                <p class="text-[#1D1616] text-[24px]">EMAIL</p>
            </div>
            
            <div class="flex items-center gap-2">
                <img src="../../assets/icons/contact card.svg" alt="contact card"/>
                <p class="text-[#1D1616] text-[24px]">CONTACT CARD</p>
            </div>

            <div class="flex items-center gap-2">
                <img src="../../assets/icons/event.svg" alt="event"/>
                <p class="text-[#1D1616] text-[24px]">Event</p>
            </div>




        </div>
        
       
      
      
       
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "../../components/Dashboard/DashboardHeader.vue";
export default {
  components: {
    DashboardHeader,
  },
};
</script>

<style scoped></style>
