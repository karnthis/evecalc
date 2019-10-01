<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-textarea rows="6" id="calcField">

          </v-textarea>
        </v-row>
        <v-row>
          <v-btn @click="process">
            press me
          </v-btn>
        </v-row>
        <v-row>
          {{ returned }}
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    returned: ''
  }),
  methods: {
    process() {
      fetch("http://localhost:5115/", {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain',
      // 'User-Agent': `TcGre'l en Karnt`
    },
    body: document.querySelector("#calcField").value
  })
  .then(res => res.json())
  // .then(res => res.text())
  .then(res => {
    this.returned = res
  })
    }
  }
};
</script>
