<template>
  <div>
    <v-container class="dashboard-card-container">
      <v-row>
        <v-col md="4" v-for="(statistic, i) in statistics" :key="i">
          <statistic-component
            :icon="statistic.icon"
            :value="statistic.value"
            :name="statistic.name"
            :caption="statistic.caption"
          ></statistic-component>
        </v-col>
      </v-row>
      <v-row>
        <div class="d-flex flex-wrap">
          <chart-component
            v-for="(monitor, i) in monitors"
            :key="i"
            :name="monitor.data.name"
            :location="monitor.data.location"
            :last-updated="monitor.data.lastUpdated"
            :seriesValues="monitor.data.series"
            :threshold="monitor.data.threshold"
          ></chart-component>
        </div>
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
  data() {
    let values = [200, 675, 410, 390, 310, 460, 250, 240];
    return {
      statistics: [
        {
          icon: "mdi-poll",
          value: "value",
          name: "name",
          caption: "caption",
        },
        {
          icon: "mdi-poll",
          value: "value",
          name: "name",
          caption: "caption",
        },
        {
          icon: "mdi-poll",
          value: "value",
          name: "name",
          caption: "caption",
        },
      ],
      monitors: [
        {
          expanded: false,
          data: {
            name: "Monitor Name2",
            location: "Monitor Location2",
            lastUpdated: "28 minutes ago",
            threshold: 13,
            series: values.map(() => 12 + Math.random() * 6),
          },
        },
        {
          expanded: false,
          data: {
            name: "Without threshold",
            location: "Monitor Location3",
            lastUpdated: "2 minutes ago",
            threshold: null,
            series: values.map(() => 12 + Math.random() * 6),
          },
        },
        {
          expanded: false,
          data: {
            name: "Without threshold",
            location: "Monitor Location3",
            lastUpdated: "2 minutes ago",
            threshold: 14,
            series: values.map(() => 12 + Math.random() * 6),
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-card-container .v-card {
  margin-bottom: 15px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
</style>