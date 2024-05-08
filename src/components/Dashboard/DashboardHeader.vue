<template>
  <div class="flex items-center justify-between">
    <div>
      <img src="../../assets/icons/Gen_Code.svg" alt="gen_code" />
    </div>
    <form class="w-full max-w-md">
      <div
        class="relative flex items-center text-[#163037] focus-within:text-[#163037]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 absolute ml-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          name="search"
          placeholder="Search for qr code"
          autocomplete="off"
          aria-label="Search for qr code"
          class="w-full pr-3 pl-10 py-4 font-semibold placeholder-[#163037] text-[#163037] rounded-[5px] border-none ring-2 ring-[#76D4DF]"
        />
      </div>
    </form>

    <div class="mr-10">
      <h6 class="text-[#1D1616] text-[15px] font-semibold">Dina Iyanuloluwa</h6>
      <h6 class="text-[#1D1616] text-[12px]">iyanudina@gmail.com</h6>
    </div>
  </div>
  <div class="flex items-center gap-2 ml-20 back-link">
      <img
        src="../../assets/icons/arrow-left.svg"
        alt="arrow-left"
        class="h-3"
      />
      <p class="text-[19px]">
        <router-link to="/">Back</router-link>
      </p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
