<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <v-navigation-drawer app dark>
      <v-sheet class="pa-4">
        <div><strong>Bouillabaisse</strong></div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item-group>
          <v-list-item
            v-for="{ icon, text, to } in links"
            :key="icon"
            :to="to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="app-bar" app dense color="white" class="pl-3 pr-6">
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu transition="slide-y-transition" left offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" :to="'notifications'">
            <v-badge :content="messages" :value="messages" overlap bordered>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    selectedItem: 1,
    messages: 1,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", to: "dashboard" },
      { icon: "mdi-bell", text: "Notifications", to: "notifications" },
    ],
    items: [
      { title: "Click Me 1" },
      { title: "Click Me 2" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
    ],
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  created() {
    // this.$vuetify.theme.dark = true
  },
};
</script>

<style scoped>
#app-bar {
  box-shadow: 0 5px 10px #fff, 0 10px 25px #fff;
}
</style>