<template>
  <section class="max-w-7xl mx-auto px-5 lg:px-0 mb-28">
    <h2
      class="text-2xl font-bold text-center text-RaisinBlack md:text-4xl lg:text-5xl"
    >
      Easy steps to create your unique QR code
    </h2>
    <div class="flex items-center flex-col-reverse lg:flex-row">
      <div>
        <div class="flex items-center gap-9">
          <figure>
            <img
              src="../../assets/icons/no1.svg"
              alt="numberone"
              class="w-16 lg:w-[36px]"
            />
          </figure>
          <div class="mt-5 md:mb-5 lg:mt-0">
            <h4
              class="text-3xl font-medium mb-3 text-MidnightGreen lg:text-4xl"
            >
              Register
            </h4>
            <p class="text-lg">
              Create an account in order to generate your QR code
            </p>
          </div>
        </div>

        <div class="flex items-center gap-9 md:mb-5">
          <div>
            <img
              src="../../assets/icons/no2.svg"
              alt="numberone"
              class="w-16 lg:w-[36px]"
            />
          </div>
          <div class="mt-5">
            <h4
              class="text-3xl font-medium mb-3 text-MidnightGreen lg:text-4xl"
            >
              Input
            </h4>
            <p class="text-lg">
              Choose the file you want to encrypt and input into the screen
            </p>
          </div>
        </div>

        <div class="flex items-center gap-9 md:mb-5">
          <div>
            <img
              src="../../assets/icons/no3.svg"
              alt="numberone"
              class="w-16 lg:w-[36px]"
            />
          </div>
          <div class="mt-5">
            <h4
              class="text-3xl font-medium mb-3 text-MidnightGreen lg:text-4xl"
            >
              Download
            </h4>
            <p class="text-lg">
              Download your QR code in your preferred format after it has been
              generated
            </p>
          </div>
        </div>

        <div class="flex items-center gap-9">
          <div>
            <img
              src="../../assets/icons/no4.svg"
              alt="numberone"
              class="w-16 lg:w-[36px]"
            />
          </div>
          <div class="mt-5">
            <h4
              class="text-3xl font-medium mb-3 text-MidnightGreen lg:text-4xl"
            >
              Save
            </h4>
            <p class="text-lg">
              You can choose to save in your unique platform and view all the
              time.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-20 Qrcode mb-5 lg:mb-0">
        <img src="../../assets/images/QRCODE.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 768px) {
  .guide {
    display: flex;
    flex-direction: column-reverse;
  }
  .unique {
    font-size: 28px;
  }
  .register {
    /* font-size: 20px; */
  }
  .account {
    /* font-size: 18px; */
  }

  .Qrcode {
    /* width: 68%; */
  }
}
</style>
