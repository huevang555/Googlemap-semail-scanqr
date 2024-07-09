<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-btn @click="saveData">Save</v-btn> <!-- Button to trigger API call -->
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'InspirePage',
  methods: {
    async saveData() {
      try {
        const requestBody = {
          telephone: ["2076790095", "2078650909"]
        };
        const response = await this.$axios.post('http://172.28.17.102:9980/adjust/getadjustment', requestBody);
        
        console.log('Response:', response.data);
        // Handle the response as needed
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle errors
      }
    }
  }
}
</script>
