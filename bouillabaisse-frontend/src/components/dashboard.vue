<template>
  <div>
    <v-container>
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
        <v-col>
          <v-card class="mt-4 mx-auto" max-width="600">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="white"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
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

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mt-4 mx-auto" max-width="600">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="white"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
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

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mt-4 mx-auto" max-width="400">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
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

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="caption grey--text font-weight-light"
                >last registration 26 minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import statisticComponent from './DashboardStatisticComponent.vue';

export default {
  components: { statisticComponent },
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