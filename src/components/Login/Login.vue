<template>
  <section class="w-screen h-screen flex items-center justify-center">
    <form class="w-11/12 md:w-1/2 xl:w-1/4">
      <section>
        <img src="../../assets/icons/Gen_Code.svg" alt="Logo" class="h-14"/>
      </section>
      <section class="my-8">
        <h3 class="text-xl capitalize font-semibold text-black01">
          Welcome back !
        </h3>
        <p class="capitalize text-sm text-Till091 font-semibold">
          Please input the details below to log in
        </p>
      </section>

      <section class="my-2 mb-2">
        <label for="email" class="text-base02 block my-2">E-mail</label>
        <input
          class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 px-3 transition-all duration-300 ease-linear"
          type="email"
          placeholder=" Enter your email"
          required=""
          name="email"
          value=""
        />
      </section>

      <section class="my-2 mb-2">
        <label class="text-base02 block my-2"> Password </label>
        <input
          class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 px-3 transition-all duration-300 ease-linear"
          type="text"
          placeholder="password"
          required=""
          name="password"
          value=""
        />
      </section>

      <section class="my-4 mb-5 w-full">
        <button
          class="font-semibold selection:capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform undefined text-whites bg-Till10101 hover:bg-blue01 w-full"
        >
          Login
        </button>
      </section>

      <section>
        <p class="font-semibold capitalize inline text-[13px] ">
          no account?<a
            class="font-semibold capitalize text-[13px] px-1 text-Till091"
            href="#"
            >create account</a
          ><a
            class="font-semibold capitalize text-[13px] px-1 text-Till091"
            href="#"
            >Forgot Password</a
          >
        </p>
      </section>
    </form>
  </section>
</template>

<script></script>

<style scoped></style>
