<template>
  <div id="topbar">
    <v-toolbar dense fixed>
      <v-toolbar-title class="headline text-uppercase">
        <span>EVE|</span>
        <span class="font-weight-light">Superhuman Scouts</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/">Home</v-btn>
        <v-btn href="https://discord.gg/hMV447y" target="_blank">Discord</v-btn>
        <v-btn href="https://seat.superhumans.space" target="_blank">EVESEAT</v-btn>
        <v-btn href="https://forms.gle/fwzU3Yu9YBgvbnos6" target="_blank">Shipping Request</v-btn>
        <v-btn to="/buyback">Buyback</v-btn>

        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">Calculators</v-btn>
          </template>
          <v-list>
            <!-- <v-list-item>
              <v-btn to="/buyback-calc">Buyback Calculator</v-btn>
            </v-list-item> -->
            <v-list-item>
              <v-btn to="/ore-calc">Ore Calculator</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn to="/share-calc">Share Calculator</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">Resources</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn href="https://google.com" target="_blank">Resource 1</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn href="https://zkillboard.com/" target="_blank">zKillboard</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn to="/subway">Hisec Map</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn href="https://www.pathfinder-w.space/" target="_blank">Pathfinder</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn href="https://evepraisal.com/" target="_blank">EVEPraisal</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn href="https://eveeye.com/" target="_blank">EVE Eye</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn href="http://evemaps.dotlan.net/" target="_blank">Dotlan</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
// import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "topbar",
  data: () => ({}),
  methods: {
    // ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  components: {
    // UserInfo
  },

  // computed: {
  // 	...mapGetters(["checkCurrUser","checkMyOrg"])
  // }
  created() {
    // this.fetchTodos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #topbar {
  padding: 10px;
  background-color: limegreen;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
}
.nav {
  display: grid;
  grid-template-columns: repeat(7, max-content);
  justify-content: space-evenly;
  column-gap: 2ch;
} */
</style>
