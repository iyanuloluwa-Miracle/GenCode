<!-- Modal.vue -->
<template>
    <div v-if="show" class="modal">
      <div class="modal-content">
        <span class="close" @click="handleClose">&times;</span>
        <h2 class="text-[28px] font-semibold text-[#1D1616]">QR Code Generated</h2>
        <div class="qr-code-container">
          <img :src="qrCode" alt="QR Code" />
        </div>
        <p class="text-[22px] text-[#1D1616]">Download QR Code ⬇</p>
        <p>Check your downloads</p>
        <p class="text-[20px] text-[#1D1616]">Share QR Code via E-mail 📧</p>
        <div class="social-icons flex items-end gap-2 justify-center">
          <img src="../../assets/icons/color-twitter.svg" alt="Twitter" />
          <img src="../../assets/icons/facebook-color.svg" alt="Facebook" />
          <img src="../../assets/icons/instagram-color.svg" alt="Instagram" />
        </div>
        <button class="return-btn" @click="handleClose">Return to Dashboard</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      qrCode: String,
    },
    methods: {
      handleClose() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 40px;
    position: relative;
    width: 40%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
  }
  
  .qr-code-container {
    margin: 20px 0;
  }
  
  .qr-code-container img {
    width: 150px;
    height: 150px;
  }
  
  .download-btn {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background: #76D4DF;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  .download-btn:hover {
    background: #214953;
  }
  
  .social-icons img {
    width: 30px;
    margin: 10px;
    cursor: pointer;
  }
  
  .return-btn {
    margin-top: 20px;
    padding: 10px 78px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background: white;
    color: #2E666D;
    border: 2px solid #76D4DF;
    border-radius: 5px;
  }
  
  .return-btn:hover {
    background: #214953;
    color: white;
  }
  </style>
  