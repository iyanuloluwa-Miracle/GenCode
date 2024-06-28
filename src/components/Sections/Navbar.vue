<template>
  <Header class="bg-[#F3FAFD] ">
    <Nav class="flex justify-between items-center w-[92%] mx-auto">
      <router-link to="/">
        <img src="../../assets/icons/Gen_Code.svg" alt="nav-logo" class="nav-logo"/>
      </router-link>

      <div
        class="nav-link duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-2 "
        :class="{ 'top-[9%]': menuOpen }"
      >
        <ul
          class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
        >
          <li class="text-[14px] text-Till01 font-bold"><router-link to="/">Home</router-link></li>
          <li class="text-[14px] text-Till01 font-bold"><router-link to="/services">Services</router-link></li>
          <li class="text-[14px] text-Till01 font-bold"><router-link to="/contact-us">Contact Us</router-link></li>
          <li class="text-[14px] text-Till01 font-bold"><router-link to="/faqs">FAQS</router-link></li>
        </ul>
      </div>

      <div class="flex items-center gap-7">
        <router-link to="/login" class="flex items-center gap-9">
          <button
            class="capitalize rounded p-2 cursor-pointer text-[12px] font-bold transition-all duration-150 ease-in transform  bg-whites text-blue01 border-[1px] border-Till10101 hover:bg-Till10101 hover:text-whites w-28"
          >
            Login
          </button>
        </router-link>

        <router-link to="/register" class="flex items-center gap-9">
          <button
            class="capitalize text-[12px] font-bold rounded p-2 cursor-pointer transition-all duration-150 ease-in transform text-black01 bg-Till10101 hover:bg-Aqua hover:text-whites w-28"
          >
            Register
          </button>
        </router-link>

        <ion-icon @click="toggleMenu" name="menu" class="text-[25px] cursor-pointer md:hidden"></ion-icon>
      </div>
    </Nav>
  </Header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
<style scoped>
@media (max-width:768px){
   .nav-logo{
    width: 100%; /* adjust this value as needed */
   }  
   /* rest of your styles */
}
</style>