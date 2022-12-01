<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="src/assets/logo.svg" />
    </v-responsive>
  </v-container>
</template>

<script >

import nasaService from '@/services/nasa.service';

export default {

  data: () => ({
    type: "month",
    weekday: [0, 1, 2, 3, 4, 5, 6],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,

    typeToLabel: {
      month: "Month",
      week: "Week",
    },
  }),
  beforeMount() {
    this.getInfo();
  },
  computed: {
    displayInfo() {
      return this.allEvents;
    },
  },

  methods: {

    getInfo() {
      nasaService.getInfo().then(
        (response) => {
          this.allEvents = response.data;
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
