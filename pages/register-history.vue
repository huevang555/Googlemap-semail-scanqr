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
    "ClientIP":"1.1.1.1",
    "UserId":"APITPLUS",
    "Chanel":"TPLUS",
    "Msisdn": "2076964253",
    "PageNo": 1,
    "PageSize":10
};
        const response = await this.$axios.post('http://172.28.26.23:9085/api/spnv/query-register-history', requestBody);
        
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
