<template>
  <main class="w-full md:my-12 md:items-start flex flex-col overflow-x-hidden">
    <section class="w-screen flex items-center justify-center my-12">
      <form class="w-11/12 md:w-1/2 xl:w-1/4">
        <section>
          <img src="../assets/icons/Gen_Code.svg" alt="Logo" class="h-14" />
        </section>
        <section>
          <h3 class="text-xl font-semibold text-black01">Forgot Password?</h3>
          <p class="text-[11px] text-Till091">
            Enter your email associated with this account
          </p>
        </section>
        <section class="my-2 mb-2">
          <label htmlFor="username" class="text-base02 block my-2">
            Email
          </label>
          <input
            class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear"
            type="text"
            placeholder="email"
            required=""
            name="email"
            value=""
          />
        </section>
        <section class="my-4 mb-5 w-full">
          <button
            class="font-bold selection:capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform undefined text-black02 bg-Till10101 hover:bg-blue01 w-full text-[14px]"
          >
            Reset password
          </button>
        </section>
        <section class="flex items-center gap-2">
         <img src="../assets/icons/arrow-left.svg" alt="arrow-left" class="h-3"/>
         <p class="text-[12px]"><router-link to="/login">Back to home</router-link></p>
        </section>
      </form>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped></style>
