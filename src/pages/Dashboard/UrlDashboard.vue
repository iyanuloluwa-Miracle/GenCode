<!-- Dashboard.vue -->
<template>
  <div class="bg-[#F3FAFD]">
    <DashboardHeader />
    <DashboardBody @generateQrCode="handleGenerateQrCode" />
    <Modal :show="showModal" :qrCode="qrCode" @close="handleCloseModal" />
  </div>
</template>

<script>
import DashboardHeader from "../../components/Dashboard/DashboardHeader.vue";
import DashboardBody from "../../components/Dashboard/DashboardBody.vue";
import Modal from "../../components/Modal/QRCodeModal.vue";
import QRCode from 'qrcode';



export default {
  components: {
    DashboardHeader,
    DashboardBody,
    Modal,
  },
  data() {
    return {
      showModal: false,
      qrCode: '',
    };
  },
  methods: {
    async handleGenerateQrCode(value) {
      try {
        this.qrCode = await QRCode.toDataURL(value);
        this.showModal = true;
      } catch (error) {
        console.error("Failed to generate QR code:", error);
      }
    },
    handleCloseModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped></style>
