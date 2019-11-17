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
        <v-btn to="/contracts">Contracts</v-btn>
        <v-btn href="https://forms.gle/fwzU3Yu9YBgvbnos6" target="_blank">Submit Request</v-btn>
        <v-btn to="/shipping">Shipping</v-btn>
        <v-btn to="/buying">Buying</v-btn>
        <v-btn to="/calendar">Calendar</v-btn>
        <v-btn to="/ore-calc">Ore Calculator</v-btn>
        <v-btn to="/share-calc">Share Calculator</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
// import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "topbar",
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
