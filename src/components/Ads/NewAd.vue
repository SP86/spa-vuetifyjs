<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create NewAd</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field name="title" label="Add Title*" type="text" v-model="title" required :rules="[v => !!v || 'Title is required']"></v-text-field>
          <v-textarea name="description" label="Add Description" type="text" v-model="description" required :rules="[v => !!v || 'Description is required']"></v-textarea>
        </v-form>
        <v-layout row>
          <v-flex xs12>
            <v-btn
                    class="warning"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="150" class="mt-3"/>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
                    label="Add to promo?"
                    v-model="promo"
                    color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
                    :disabled="!valid"
                    class="success"
                    @click="createAdd"

            >Create Add</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: '',
        valid: false
      }
    },
    methods: {
      createAdd () {
        if (this.$refs.form.validate()) {
          let add = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(add)
        }
      }
    }
  }
</script>
