<template>
  <v-app>
    <Topbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Topbar from "@/components/Topbar.vue";

export default {
  name: "App",
  components: {
    Topbar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fcba03;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fcba03;
}

#nav a.router-link-exact-active {
  color: #fcba03;
} */
</style>
