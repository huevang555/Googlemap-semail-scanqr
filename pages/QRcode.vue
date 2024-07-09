<template>
  <div>
    <h1>This is QR Code page</h1>
    <qrcode-vue :value="qrCodeUrl" :size="200"></qrcode-vue>
    <p>Scan the QR code to see the heart animation</p>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue
  },
  data() {
    return {
      qrCodeUrl: 'http://localhost:3000/Heart' // Replace with your site URL and heart animation path
    }
  }
}
</script>
