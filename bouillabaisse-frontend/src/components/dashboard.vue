<template>
  <div>
    <v-container class="dashboard-card-container">
      <v-row>
        <v-col md="4">
          <statistic-component
            :icon="'mdi-poll'"
            :value="'value'"
            :name="'name'"
            :caption="'caption'"
          ></statistic-component>
        </v-col>
        <v-col md="4">
          <statistic-component
            :icon="'mdi-poll'"
            :value="'value'"
            :name="'name'"
            :caption="'caption'"
          ></statistic-component>
        </v-col>
        <v-col md="4">
          <statistic-component
            :icon="'mdi-poll'"
            :value="'value'"
            :name="'name'"
            :caption="'caption'"
          ></statistic-component>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6">
          <chart-component></chart-component>
        </v-col>
        <v-col md="6">
          <chart-component></chart-component>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import statisticComponent from "./DashboardStatisticComponent.vue";
import chartComponent from "./DashboardChartComponent.vue";

export default {
  components: {
    statisticComponent,
    chartComponent,
  },
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
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
.dashboard-card-container .v-card {
  margin-bottom: 15px;
}
</style>