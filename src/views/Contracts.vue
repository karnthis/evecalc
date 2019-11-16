<template>
  <v-layout>
    <v-row>
      <v-card class="mx-auto" width="400" tile>
        <v-card-title>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Available by Request from:</v-list-item-title>
              <v-list-item-title>TcGre'l en Karnt</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text v-for="item in offers" :key="item.id">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.details }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-row>
  </v-layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "contracts",
  data: () => {
    return {
      offers: [
        {
          name: "Core Scanner Probe I",
          details: "5 isk"
        },
        {
          name: "Inferno Fury Light Missile",
          details: "5 isk"
        },
        {
          name: "Nanite Repair Paste",
          details: "5 isk"
        },
        {
          name: "Nova Fury Light Missile",
          details: "5 isk"
        },
        {
          name: "Republic Fleet EMP M",
          details: "5 isk"
        },
        {
          name: "Republic Fleet Proton",
          details: "5 isk"
        },
        {
          name: "Scourge Fury Light Missile",
          details: "5 isk"
        }
      ]
    };
  },
  components: {
    // HelloWorld
  }
};
</script>
