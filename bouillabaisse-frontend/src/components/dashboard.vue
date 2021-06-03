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
          <chart-component
            name="Monitor Name2"
            location="Monitor Location2"
            last-updated="28 minutes ago"
            :seriesValues="value1"
            :threshold="13"
          ></chart-component>
        </v-col>
        <v-col md="6">
          <chart-component
            name="Without threshold"
            location="Monitor Location3"
            last-updated="2 minutes ago"
            :seriesValues="value2"
          ></chart-component>
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
      return this.value.map(() => 12 + Math.random() * 6);
    },
    value2() {
      return this.value.map(() => 12 + Math.random() * 6);
    },
  },
};
</script>

<style scoped>
.dashboard-card-container .v-card {
  margin-bottom: 15px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
</style>