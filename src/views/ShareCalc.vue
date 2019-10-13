<template>
  <v-container>
    <v-content>
      <v-row>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-row>
              <v-card class="purple lighten-4">
                <v-card-title>
                  <span>Settings:</span>
                </v-card-title>
                <v-card-text>
                  <v-col>
                    <v-row>
                      <v-subheader class="pl-0">Corp Tax Rate</v-subheader>
                      <v-slider
                        color="black"
                        track-color="gray"
                        v-model="tax"
                        :thumb-size="16"
                        thumb-label="always"
                      ></v-slider>
                    </v-row>
                    <v-row>
                      <v-subheader class="pl-0">Buy vs Sell Price</v-subheader>
                      <v-slider
                        color="black"
                        track-color="gray"
                        v-model="weight"
                        :thumb-size="16"
                        thumb-label
                      ></v-slider>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-subheader class="pl-0"># of Shares</v-subheader>
                    <v-text-field v-model="shares" solo dense label="# of Shares"></v-text-field>
                  </v-col>
                </v-card-text>
                <v-card-actions>
                  <v-row justify="space-between">
                    <v-btn class="red lighten-3" @click="resetModifiers">Reset Modifiers</v-btn>
                    <v-btn
                      justify-center
                      class="green lighten-3"
                      @click="updateModifiers"
                    >Update Modifiers</v-btn>
                  </v-row>
                </v-card-actions>
              </v-card>
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
                    <v-btn @click="process">Calculate</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-row>
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
                      <v-list-item-title>Total Buy: {{ prettyTotals(output.buy) }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Total Sell: {{ prettyTotals(output.sell) }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Adjusted Value: {{ output.adjusted }}</v-list-item-title>
                    </v-list-item>
                  </v-col>
                  <v-col>
                    <v-list-item>
                      <v-list-item-title>Final Total: {{ output.total }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Per Share: {{ output.perShare }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Total Corp Tax: {{ output.taxTotal }}</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item>
                      <v-list-item-title>Total Test: {{ output.buy }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Total Test2: {{ output.adjusted }}</v-list-item-title>
                    </v-list-item>-->
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
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
    weight: 50,
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
      return num | 1;
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
        this.output.adjusted / this.safeNumber(this.tax)
      );
      this.output.perShare = this.prettyTotals(
        this.output.adjusted /
          this.safeNumber(this.tax) /
          this.safeNumber(this.shares)
      );
      this.output.taxTotal = this.prettyTotals(
        this.output.adjusted / this.safeNumber(100 - this.tax)
      );
    },
    setPrices(src) {
      this.output.buy = src.buy;
      this.output.sell = src.sell;
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
          this.setPrices(res.src);
          this.updateModifiers();
          this.returned = true;
        });
    }
  }
};
</script>
