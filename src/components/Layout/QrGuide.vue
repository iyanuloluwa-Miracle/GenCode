<template>
  <section>
    <h2  class="text-[56px] text-center mt-9 ml-10 text-[#2B2121] font-medium unique">Easy steps to create your unique QR code</h2>
    <div class="flex items-center justify-evenly flex-wrap guide">
      <div>
        <div class="flex items-center gap-9">
          <div>
            <img
              src="../../assets/icons/no1.svg"
              alt="numberone"
              width="36px"
            />
          </div>
          <div class="mt-5">
            <h4 class="text-[35px] text-[#214953] register">Register</h4>
            <p class="text-[18px] account">
              Create an account in order to generate your QR code
            </p>
          </div>
        </div>

        <div class="flex items-center gap-9">
          <div>
            <img
              src="../../assets/icons/no2.svg"
              alt="numberone"
              width="36px"
            />
          </div>
          <div class="mt-5">
            <h4 class="text-[35px] text-[#214953] register">Input</h4>
            <p class="text-[18px] account">
              Choose the file you want to encrypt and input into the screen
            </p>
          </div>
        </div>

        <div class="flex items-center gap-9">
          <div>
            <img
              src="../../assets/icons/no3.svg"
              alt="numberone"
              width="36px"
            />
          </div>
          <div class="mt-5">
            <h4 class="text-[35px] text-[#214953] register">Download</h4>
            <p class="text-[18px] account">
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
              width="36px"
            />
          </div>
          <div class="mt-5">
            <h4 class="text-[35px] text-[#214953] register">Save</h4>
            <p class="text-[18px] account">
              You can choose to save in your unique platform and view all the
              time.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-20 Qrcode">       
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

  .guide{
    display: flex;
    flex-direction: column-reverse;
  }
  .unique{
    font-size: 28px;
  }
  .register{
    font-size:20px;
    
  }
  .account{
    font-size: 18px;
  }

  .Qrcode{
    width: 68%;
  }
 

}
</style>
