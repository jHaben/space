<template>
  <v-container class="fill-height">


    <v-responsive class="d-flex align-center fill-height">
      <h1 class="text-center "> {{ info.title }}</h1>
      <v-img contain height="400" :src=info.hdurl />
      <br />
      <p> {{ info.explanation }}</p>
      <br />
      <p> All information provided by NASA, the <a href="https://api.nasa.gov/">APOD API</a> </p>
    </v-responsive>


  </v-container>
</template>

<script >

import nasaService from '@/services/nasa.service';

export default {

  data: () => ({

    info: {
      copyright: "",
      date: "",
      explanation: "",
      hdurl: "",
      media_type: "",
      service_version: "",
      title: "",
      url: ""
    },


  }),
  beforeMount() {
    this.getInfo();
  },
  computed: {
    displayInfo() {
      return this.info;
    },
  },

  methods: {

    getInfo() {
      nasaService.getInfo().then(
        (response) => {
          this.info = response.data;

          console.log(response.data)
        },
        (error) => {
          console.log(
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
          );
        }
      );
    },

  }
}
</script>
