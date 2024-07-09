<template>
  <v-card>
    <div ref="map" style="height: 400px;"></div>
  </v-card>
</template>

<script>
export default {
  mounted() {
    if (this.$client) {
      import('leaflet').then(L => {
        // Initialize the map
        this.map = L.map(this.$refs.map).setView([17.972678, 102.679045], 15);

        // Add the OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // Optionally, you can add markers, overlays, etc. to the map
      }).catch(error => {
        console.error('Failed to load Leaflet', error);
      });
    }
  },
  beforeDestroy() {
    // Clean up Leaflet resources when the component is destroyed
    if (this.map) {
      this.map.remove();
    }
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
