<template>
  <div
    :style="{
      width: expanded ? '100%' : '50%',
      'box-sizing': 'border-box',
    }"
    class="pa-3"
  >
    <v-card>
      <v-card-title class="d-flex pa-0 mx-3 justify-space-between">
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
          <v-btn icon @click="expanded = !expanded">
            <v-icon style="font-size: 20px">mdi-arrow-expand</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-sheet color="transparent">
          <apexchart
            height="180"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </v-sheet>
      </v-card-text>
    </v-card>
  </div>
</template>
  
<script>
import VueApexCharts from "vue-apexcharts";
import colors from "vuetify/lib/util/colors";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    // expanded: {
    //   type: Boolean,
    //   required: false,
    //   default: false,
    // },
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
    threshold: {
      type: Number,
      required: false,
    },
    seriesValues: {
      type: Array,
      required: true,
      default: () => [12, 11, 14, 18, 17, 13, 13],
    },
  },
  data() {
    return {
      series: [],
      expanded: "false",
      chartOptions: {
        chart: {
          type: "line",
          sparkline: {
            enabled: true,
          },
          animations: {
            enabled: true,
            easing: "easeinout",
          },
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          width: "99%",
        },
        fill: {
          type: "gradient",
          colors: [colors.grey.darken1, "#4caf50"],
          opacity: 0,
          gradient: {
            type: "vertical",
            shadeIntensity: 0,
            opacityFrom: 0.7,
            opacityTo: 0.2,
            stops: [0, 100],
          },
        },
        stroke: {
          curve: "smooth",
          colors: [colors.grey.darken1, "#4caf50"],
          dashArray: [8, 0],
          width: [5, 5],
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  },
  mounted() {
    this.series = [
      {
        name: "threshold",
        data: this.threshold
          ? Array(this.seriesValues.length).fill(this.threshold)
          : [],
        type: "line",
      },
      {
        name: "minimum found",
        data: this.seriesValues,
        type: "area",
      },
    ];
  },
};
</script>