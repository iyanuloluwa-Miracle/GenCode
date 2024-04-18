<template>
  <Header class="bg-[#F3FAFD]">
    <Nav class="flex justify-between items-center w-[92%]">
      <a href="#">
        <img src="../../assets/icons/Gen_Code.svg" alt="nav-logo"/>
      </a>

      <div
        class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex flex-wrap items-center px-2"
      >
        <ul
          class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
        >
          <li class="text-[14px] text-Till01 font-bold">Home</li>
          <li class="text-[14px] text-Till01 font-bold">Services</li>
          <li class="text-[14px] text-Till01 font-bold">Contact Us</li>
          <li class="text-[14px] text-Till01 font-bold">FAQS</li>
        </ul>
      </div>

      <div class="flex items-center gap-7">

         <a class="flex items-center gap-9">
          <button
            class="capitalize rounded p-2 cursor-pointer text-[12px] font-bold transition-all duration-150 ease-in transform  bg-whites text-blue01 border-[1px] border-Till10101 hover:bg-Aqua hover:text-whites w-28"
          >
            Login
          </button>
        </a>

        <a class="flex items-center gap-9">
          <button
            class="capitalize text-[12px] font-bold rounded p-2 cursor-pointer transition-all duration-150 ease-in transform text-black01 bg-Till10101 hover:bg-secondary w-28"
          >
            Register
          </button>
        </a>

       
      </div>
    </Nav>
  </Header>
</template>


<script></script>
<style scoped></style>