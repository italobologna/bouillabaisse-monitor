<template>
  <v-card class="mt-4 mx-auto" max-width="800" min-width="400">
    <v-card-title class="d-flex pa-0 mx-3 mb-3 justify-space-between">
      <div class="d-flex flex-row">
        <v-sheet
          dark
          rounded
          class="v-sheet--offset elevation-7 mb-n6 pa-7 success"
          :style="{
            'max-height': '90px',
            'max-width': '90px',
            width: 'auto',
            position: 'relative',
            top: '-30px',
          }"
        >
          <v-icon style="font-size: 32px">mdi-monitor</v-icon>
        </v-sheet>

        <div class="ml-3 mt-2">
          <div>
            <span class="text-h5 font-weight-light grey--text text--darken-2">
              {{ name }}
            </span>
          </div>
          <div class="text-body-2 font-weight-light grey--text">
            <span>{{ location }} </span>
            <span> - </span>
            <span class="caption">
              {{ lastUpdated }}
            </span>
          </div>
        </div>
      </div>
      <div>
        <v-btn icon>
          <v-icon style="font-size: 20px">mdi-arrow-expand</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-sheet color="transparent" style="position: relative">
        <v-sparkline
          :value="value1"
          smooth
          color="rgb(0, 255, 0, 1)"
          line-width="2"
          padding="16"
        ></v-sparkline>
        <v-sparkline
          :value="value2"
          smooth
          color="rgb(255, 0, 0, 0.5)"
          line-width="2"
          padding="16"
          class="stackSpark"
        ></v-sparkline>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "Monitor Name",
    },
    location: {
      type: String,
      required: true,
      default: "Monitor Location",
    },
    lastUpdated: {
      type: String,
      required: true,
      default: "26 minutes ago",
    },
  },
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [300, 675, 410, 390, 310, 460, 250, 240],
  }),
  computed: {
    value1() {
      return this.value.map((i) => (2.0 + Math.random()) * i);
    },
    value2() {
      return this.value.map((i) => (1.0 + Math.random()) * i);
    },
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}

.stackSpark {
  position: absolute;
  top: 0;
  left: 0;
}
</style>