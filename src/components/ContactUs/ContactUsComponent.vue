<template>
  <div>
    <h2 class="text-[46px] text-center mt-9 text-[#272E31] font-bo contact-heading">
      How Can We Help you ?
    </h2>
    <p class="text-[14px] text-center text-[#3D8891] contact-paragraph">
      Let us know how we can help you and we’ll get right back to you.
    </p>
    <div class="w-screen flex items-center justify-center mt-12">
      <form class="w-11/12 md:w-1/2 xl:w-1/4">
        <div class="my-2 mb-2">
          <label class="text-[18px] block my-2"> First Name </label>
          <input
            class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear"
            type="text"
            placeholder="Iyanuloluwa"
            required=""
            name="Iyanuloluwa"
            value=""
          />
        </div>

        <div class="my-2 mb-2">
          <label class="text-[18px] block my-2"> Last Name </label>
          <input
            class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-11 transition-all px-3 duration-300 ease-linear"
            type="text"
            placeholder="last name"
            required=""
            name="Iyanuloluwa"
            value=""
          />
        </div>

        <div class="my-2 mb-2">
          <label htmlFor="username" class="text-[18px] block my-2">
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
        </div>

        <div class="my-2 mb-2">
          <label class="text-[18px] block my-2">
            Message
          </label>


          <textarea
            class="input border-[1px] border-blue01 focus:border-Till10101 focus:outline-none rounded-md w-full h-32 transition-all p-2 resize-none duration-300 ease-linear"
            name=""
            required>
          

          </textarea>
          <div class="my-4 mb-5 w-full">
        <button
          class="font-semibold selection:capitalize rounded p-2 cursor-pointer transition-all duration-150 ease-in transform undefined text-whites bg-Till10101 hover:bg-blue01 w-full"
        >
          Submit
        </button>
      </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>
@media (max-width: 768px) {
  .contact-heading{
    font-size: 30px;
    text-align: left;
    margin-left: 15px;
  }
  .contact-paragraph{
    text-align: left;
    margin-left: 15px;

  }

}
</style>
