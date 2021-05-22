<template>
  <v-card class="pa-3 mt-3">
    <v-card-title class="d-flex pa-0 justify-space-between">
      <v-sheet
        dark
        rounded
        class="v-sheet--offset elevation-7 mb-n6 pa-7 primary"
        :style="{
          'max-height': '90px',
          width: 'auto',
          position: 'relative',
          top: '-30px',
        }"
      >
        <v-icon style="font-size: 32px">{{ icon }}</v-icon>
      </v-sheet>
      <div class="ml-6">
        <div class="ml-auto text-right">
          <span class="text-body-2 font-weight-light grey--text">
            {{ name }}
          </span>
          <div class="text-h5 font-weight-light grey--text text--darken-2">
            {{ value }}
          </div>
        </div>
      </div>
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-card-text class="px-1 pt-1 pb-0">
      <div class="text-caption font-weight-light grey--text">
        {{ caption }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      icon: "mdi-poll",
      value: "value",
      name: "name",
      caption: "caption",
    };
  },
};
</script>