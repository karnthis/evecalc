<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>EVE|</span>
        <span class="font-weight-light">Superhuman Scouts</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank"> -->
      <span class="mr-2">Salvage Share Calculator</span>
      <!-- </v-btn> -->
    </v-app-bar>

    <v-content>
      <v-row>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-card class="purple lighten-4">
              <v-card-title>
                <span>Settings:</span>
              </v-card-title>
              <v-card-actions>
                <v-col cols="3">
                  <v-subheader class="pl-0">Corp Tax Rate</v-subheader>
                  <v-slider v-model="slider" :thumb-size="16" thumb-label="always"></v-slider>
                </v-col>
                <v-col cols="3">
                  <v-text-field v-model="shares" label="# of Shares" filled></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn>placeholder</v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn>placeholder</v-btn>
                </v-col>
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-container>
        <v-spacer></v-spacer>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="blue lighten-4">
                <v-card-text>
                  <v-textarea
                    rows="6"
                    id="calcField"
                    placeholder="Paste Here"
                    class="blue lighten-3"
                  ></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="process">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-row>
      <v-spacer></v-spacer>
      <v-row v-if="returned">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-card class="green lighten-4">
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-list-item>
                      <v-list-item-title>Total Buy: {{ prettyTotals(returned.src.buy) }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Total Sell: {{ prettyTotals(returned.src.sell) }}</v-list-item-title>
                    </v-list-item>
                  </v-col>
                  <v-col>
                    <v-list-item>
                      <v-list-item-title>Adjusted Total: {{ prettyTotals(returned.src.buy/safeNumber(slider)) }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Per Share: {{ prettyTotals(prettyTotals(returned.src.buy/safeNumber(slider))/safeNumber(shares)) }}</v-list-item-title>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-container>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data: () => ({
    returned: "",
    slider: 10,
    shares: 1
  }),
  methods: {
    safeNumber(num) {
      return num | 1
    },
    prettyTotals(val) {
      let wrk = val * 100;
      wrk = Math.round(wrk);
      return wrk / 100;
    },
    process() {
      fetch("https://node1.squirrellogic.com/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain"
          // 'User-Agent': `TcGre'l en Karnt`
        },
        body: document.querySelector("#calcField").value || "PLEX"
      })
        .then(res => res.json())
        // .then(res => res.text())
        .then(res => {
          this.returned = res;
        });
    }
  }
};
</script>
