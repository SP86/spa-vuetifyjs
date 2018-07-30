<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
                  src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                  height="300"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary">Lorem</h1>
            <p>Lorem dmdmdmdmdm mdm m md m dm md mdm dm dm dm</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
