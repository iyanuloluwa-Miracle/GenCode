<template>
  <main class="relative h-screen">
    <!-- Logo image -->
    <div class="absolute top-0 left-0 mt-20 ml-9">
      <img src="../assets/icons/Gen_Code.svg" class="h-29 w-auto" alt="Logo" />
    </div>

    <!-- Back icon and text -->
    <div class="absolute top-[15rem] ml-40 flex items-center z-10">
      <img
        src="../assets/icons/arrow-left.svg"
        class="h-6 w-auto"
        alt="Back Icon"
      />
      <p class="ml-2 text-base2">Back</p>
    </div>

   


   <section class="w-screen flex items-center justify-center">
    <form class="w-11/12 md:w-1/2 xl:w-1/4">
      <section class="my-10">
        <h3 class="text-xl  text-black01">Register</h3>
        <p class="text-sm text-Till091">Please input your details below to register</p>

      </section>
      <section class="my-2 mb-2">
        <label class="text-base02 block my-2">
          First Name
        </label>
        <input class="input border-[1px] border-Dark Till focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all duration-300 ease-linear" type="text" placeholder=" Iyanuloluwa" required="" name="Iyanuloluwa" value="">
      </section>
      <section class="my-2 mb-2">
        <label class="text-base02 block my-2">
          Last Name
        </label>
        <input class="input border-[1px] border-Dark Till focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all duration-300 ease-linear" type="text" placeholder=" last name" required="" name="Iyanuloluwa" value="">
      </section>
      <section class="my-2 mb-2">
        <label htmlFor="username" class="text-base02 block my-2">
          Email
        </label>
        <input class="input border-[1px] border-Dark Till focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all duration-300 ease-linear" type="text" placeholder=" email" required="" name="email" value="">
      </section>
      <section class="my-2 mb-2">
        <label htmlFor="username" class="text-base02 block my-2">
          Password
        </label>
        <input class="input border-[1px] border-[#2E666D] focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all duration-300 ease-linear" type="text" placeholder=" password" required="" name="password" value="">
      </section>      
      <p class="text-[11px]">Password must be atleast 8 character</p>
      <section class="my-4 mb-5 w-full">
        <button class="capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform undefined text-whites bg-Till10101 hover:bg-blue01 w-full ">
            Register
        </button>
      </section>
      <section>
        <p class="capitalize text-[10px] text-center">
          Already have a Gencode account ?
          <a class="capitalize text-[12px] px-1" href="#">Login</a>
        </p>
      </section>
    </form>
    

   </section>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
