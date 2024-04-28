<template>
  <div>
    <h2
      class="text-[40px] text-center mt-9 text-[#272E31] font-bold faq-heading"
    >
      Frequently Asked Questions
    </h2>
    <div class="flex items-center gap-2 mt-[-38px] ml-40 back-link">
      <img
        src="../../assets/icons/arrow-left.svg"
        alt="arrow-left"
        class="h-3"
      />
      <p class="text-[18px]">
        <router-link to="/contact-us">Back</router-link>
      </p>
    </div>
    <div class="question-wrappers">
      <div>
        <div class="flex items-center ml-[314px] mt-[58px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#272E31] question-tag">|Q.</h5>
          <h6 class="text-[16px] font-medium text-[#272E31] question-heading">
            What is a Qr code?
          </h6>
        </div>

        <div>
          <div class="flex items-center ml-[314px] mt-[10px] question-wrapper">
            <h5 class="text-[38px] font-bold text-[#81B6C4] question-tag">|A.</h5>
            <h6 class="text-[16px] text-[#272E31] ml-4 question-paragraph">
              A QR (Quick Response) code ia a two dimensional code that can
              conceal thousand characters. It <br />
              can store any information about a product or link to a destination
              URL. Scanning a QR code with a<br />
              smartphone or tablet directs the user to the destination URL.
            </h6>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center ml-[314px] mt-[58px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#272E31] question-tag">|Q.</h5>
          <h6 class="text-[16px] font-medium text-[#272E31] question-heading">
            How secure is a QR code??
          </h6>
        </div>
      </div>
      <div>
        <div class="flex items-center ml-[314px] mt-[10px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#81B6C4] question-tag ">|A.</h5>
          <h6 class="text-[16px] text-[#272E31] ml-4 question-paragraph">
            QR codes are 95% safe and secure to store all your data and
            information. QR codes are known to <br />
            be free from threats of hacking.
          </h6>
        </div>
      </div>

      <div>
        <div class="flex items-center ml-[314px] mt-[58px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#272E31] question-tag">|Q.</h5>
          <h6 class="text-[16px] font-medium text-[#272E31] question-heading">
            How do I generate my QR code?
          </h6>
        </div>
      </div>
      <div>
        <div class="flex items-center ml-[314px] mt-[10px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#81B6C4]  question-tag">|A.</h5>
          <h6 class="text-[16px] text-[#272E31] ml-4 question-paragraph">
            Simply enter the required information on getcode’s web link/app,such
            as the destination URL and <br />
            generate your own dynamic QR code in the blink of an eye.
          </h6>
        </div>
      </div>

      <div>
        <div class="flex items-center ml-[314px] mt-[58px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#272E31]  question-tag">|Q.</h5>
          <h6 class="text-[16px] font-medium text-[#272E31] question-heading">
            Can i change the QR code later?
          </h6>
        </div>
      </div>
      <div>
        <div class="flex items-center ml-[314px] mt-[10px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#81B6C4]  question-tag">|A.</h5>
          <h6 class="text-[16px] text-[#272E31] ml-4 question-paragraph">
            If you’re worried about changing your QR codes on the long run due
            to any reason or simply <br />
            because you want to change it,yes,you can change your QR code. All
            you have to do is change the <br />
            destination URL of the already generated QR code. You can also
            change it through your registered <br />
            E-mail address.
          </h6>
        </div>
      </div>

      <div>
        <div class="flex items-center ml-[314px] mt-[58px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#272E31] question-tag">|Q.</h5>
          <h6 class="text-[16px] font-medium text-[#272E31] question-heading">
            Does the QR code have an expiry date??
          </h6>
        </div>
      </div>
      <div>
        <div class="flex items-center ml-[314px] mt-[10px] question-wrapper">
          <h5 class="text-[38px] font-bold text-[#81B6C4] question-tag">|A.</h5>
          <h6 class="text-[16px] text-[#272E31] ml-4 question-paragraph">
            Your QR codes are valid for as long as your membership is valid and
            active.
          </h6>
        </div>
      </div>
    </div>
    <div class="mt-[40px] support-text">
      <p class="text-center text-[#404D52] text-[18px]">
        Your question is not listed here? Send us a message via our e-mail
        @supportgetcode.com and we will answer your questions.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 768px) {
  .faq-heading {
    font-size: 20px;
  }
  .back-link {
    display: none;
  }
  .question-wrapper {
    display: flex;
    text-align: left;
    margin:0;

  }

  .question-wrappers {
    text-align: left;
  }

  .question-heading {
    margin-left: 20px;
  }
  .question-tag {
    font-size: 20px;
  }

  .question-paragraph br{
    display:none;
  

  }
  .support-text{
    margin:0;
    margin-top: 20px;
  }
  .support-text p{
    font-size: 15px;
  }
  .question-paragraph{
    font-size: 10px;
   
  }
}
</style>
