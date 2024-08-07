<template>
  <section class="max-w-7xl mx-auto px-5">
    <div class="text-center">
      <h2 class="text-2xl mt-9 text-[#272E31] font-bold lg:mb-5 lg:text-[46px]">
        How Can We Help you?
      </h2>
      <p class="text-sm text-TealBlue contact-paragraph">
        Let us know how we can help you and we’ll get right back to you.
      </p>
    </div>
    <div class="flex justify-center mt-12">
      <form class="w-full max-w-lg">
        <div class="my-2 mb-2">
          <label class="text-lg block my-2"> First Name </label>
          <input
            class="input border-[1px] border-AliceBlue focus:border-TiffanyBlue focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear"
            type="text"
            placeholder="Iyanuloluwa"
            required
            name="firstName"
            value=""
          />
        </div>

        <div class="my-2 mb-2">
          <label class="text-lg block my-2"> Last Name </label>
          <input
            class="input border-[1px] border-AliceBlue focus:border-TiffanyBlue focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear"
            type="text"
            placeholder="last name"
            required
            name="lastName"
            value=""
          />
        </div>

        <div class="my-2 mb-2">
          <label class="text-lg block my-2"> Email </label>
          <input
            class="input border-[1px] border-AliceBlue focus:border-TiffanyBlue focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear"
            type="text"
            placeholder="email"
            required
            name="email"
            value=""
          />
        </div>

        <div class="my-2 mb-2">
          <label class="text-lg block my-2"> Message </label>
          <textarea
            class="input border-[1px] border-AliceBlue focus:border-TiffanyBlue focus:outline-none rounded-md w-full h-32 transition-all p-2 resize-none duration-300 ease-linear"
            name="message"
            required
          ></textarea>
        </div>

        <div class="my-4 mb-5 w-full">
          <button
            class="font-semibold selection:capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform text-whites bg-TiffanyBlue hover:bg-AliceBlue w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
