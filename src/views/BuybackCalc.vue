<template>
  <v-container>
    <!-- <v-content>
      <v-card class="justify-center">
        <v-card-title class="justify-center">
          <span>Buyback Instructions</span>
        </v-card-title>
        <v-card-text class="text-left">
          Superhumans offers buyback of most goods at 90 percent Jita Buy for:
          <ul>
            <li>Blue/Red Loot</li>
            <li>Officer Personal Effects</li>
            <li>Salvage</li>
            <li>Trig research/salvage/materials</li>
            <li>data relic research components</li>
            <li>WH Gas</li>
            <li>bling modules</li>
            <li>metal scraps</li>
          </ul>
          For Ore (Basic Ore, Ice, And Moon Goo) Send a Normal Evepraisal to Razeleao, or Mesmashes. An appropriate price will be generated from the mineral price (This prevents us from underpaying for manipulated ores, and minerals are harder to manipulate). This Process will be revamped soon.
          
          Follow the below steps to create a new Buyback request:
          <ol>
            <li>Paste your items in the field and hit calculate</li>
            <li>Create a contract to Superhuman And Associates</li>
            <li>Set the price equal to the Buyback Total</li>
            <li>Set Expiration to 4 Weeks</li>
          </ol>
        </v-card-text>
      </v-card>
    </v-content>-->
    <v-content>
      <v-row>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-card class="justify-center" max-width="450">
              <v-card-title class="justify-center">
                <span>Buyback Instructions</span>
              </v-card-title>
              <v-card-text class="text-left">
                <p>Superhumans offers buyback of most goods at 90 percent Jita Buy for:
                <ul>
                  <li>Blue/Red Loot</li>
                  <li>Officer Personal Effects</li>
                  <li>Salvage</li>
                  <li>Trig research/salvage/materials</li>
                  <li>Data relic research components</li>
                  <li>WH Gas</li>
                  <li>Bling modules</li>
                  <li>Metal scraps</li>
                </ul></p>
                <p>For Ore (Basic Ore, Ice, And Moon Goo) Send a Normal Evepraisal to Razeleao, or Mesmashes. An appropriate price will be generated from the mineral price (This prevents us from underpaying for manipulated ores, and minerals are harder to manipulate). This Process will be revamped soon.</p>
                <p>Follow the below steps to create a new Buyback request:
                <ol>
                  <li>Paste your items in the field and hit calculate</li>
                  <li>Create a contract to Superhuman And Associates</li>
                  <li>Set the price equal to the Buyback Total</li>
                  <li>Set Expiration to 4 Weeks</li>
                </ol></p>
              </v-card-text>
            </v-card>
            <!-- <v-row class="justify-end"> -->
            <v-card class="blue lighten-4">
              <v-card-text>
                <v-textarea
                  rows="20"
                  id="calcField"
                  placeholder="Paste Here"
                  class="blue lighten-3"
                ></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="process">Calculate</v-btn>
              </v-card-actions>
            </v-card>
            <!-- </v-row>
            <v-row class="justify-start">-->
            <v-card class="green lighten-4" v-show="returned">
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-list-item>
                      <v-list-item-title>Buyback Total: {{ output.total.toLocaleString() }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Corp Tax: {{ output.taxTotal.toLocaleString() }}</v-list-item-title>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <!-- </v-row> -->
          </v-layout>
        </v-container>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "share-calc",
  components: {
    // HelloWorld,
  },
  data: () => ({
    returned: false,
    tax: 10,
    shares: 1,
    weight: 0,
    output: {
      buy: 0,
      sell: 0,
      adjusted: 0,
      total: 0,
      perShare: 0,
      taxTotal: 0
    }
  }),
  methods: {
    safeNumber(num) {
      return num || 1;
    },
    prettyTotals(val) {
      let wrk = val * 100;
      wrk = Math.round(wrk);
      return wrk / 100;
    },
    resetModifiers() {
      this.tax = 10;
      this.shares = 1;
      this.weight = 50;
    },
    updateModifiers() {
      // let { buy, sell, adjusted, total, perShare, taxTotal } = this.output
      this.output.adjusted = this.prettyTotals(
        ((100 - this.weight) / 100) * this.output.buy +
          (this.weight / 100) * this.output.sell
      );
      this.output.total = this.prettyTotals(
        this.output.adjusted * this.safeNumber((100 - this.tax) / 100)
      );
      this.output.perShare = this.prettyTotals(
        (this.output.adjusted * this.safeNumber((100 - this.tax) / 100)) /
          this.safeNumber(this.shares)
      );
      this.output.taxTotal = this.prettyTotals(
        this.output.adjusted * (this.tax / 100)
      );
    },
    setPrices(src) {
      this.output.buy = src.buy;
      this.output.sell = src.sell;
    },
    process() {
      fetch("https://api.squirrellogic.com/evepraisal?key=5", {
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
          if (res.src) {
            this.setPrices(res.src);
            this.updateModifiers();
            this.returned = true;
          }
        });
    }
  }
};
</script>
