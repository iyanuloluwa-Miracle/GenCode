<!-- Modal.vue -->
<template>
    <div v-if="show" class="modal">
      <div class="modal-content">
        <span class="close" @click="handleClose">&times;</span>
        <div class="modal-body">
          <h2>QR Code Generated</h2>
          <div class="qr-code-container">
            <img :src="qrCode" alt="QR Code" />
          </div>
          <button class="download-btn">Download QR Code ⬇</button>
          <div class="share-options">
            <p>Share QR Code via E-mail 📧</p>
            <div class="social-icons">
              <img src="../../assets/icons/twitter.svg" alt="Twitter" />
              <img src="../../assets/icons/facebook.svg" alt="Facebook" />
              <img src="../../assets/icons/instagram.svg" alt="Instagram" />
            </div>
          </div>
          <button class="return-btn" @click="handleClose">Return to Dashboard</button>
        </div>
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
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  
  .modal-body {
    text-align: center;
  }
  
  .qr-code-container {
    margin: 20px 0;
  }
  
  .download-btn, .return-btn {
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
  
  .download-btn:hover, .return-btn:hover {
    background: #214953;
  }
  
  .share-options {
    margin: 20px 0;
  }
  
  .social-icons img {
    width: 30px;
    margin: 0 10px;
    cursor: pointer;
  }
  </style>
  