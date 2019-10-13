<template>
  <v-sheet height="500">
    <v-calendar type="month" :now="now" :value="now" :events="events"></v-calendar>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "calendar",
  components: {
    // HelloWorld
  },
  data: () => ({
    now: Date.now(),
    events: [
      {
        name: "Moon 1 Pop",
        start: "2019-10-15"
      },
      {
        name: "Moon 2 Pop",
        start: "2019-10-07"
      },
      {
        name: "Moon 1 Pop",
        start: "2019-10-03"
      },
      {
        name: "Moon 2 Pop",
        start: "2019-10-01"
      },
      {
        name: "Moon 3 Pop",
        start: "2019-10-21"
      }
    ]
  })
};
</script>
