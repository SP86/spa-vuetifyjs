/* eslint-disable quotes */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBTUssmqOct1gA8E0GFuVgjEKJ6iWZBG3g',
      authDomain: 'vuetify-spa-1a45a.firebaseapp.com',
      databaseURL: 'https://vuetify-spa-1a45a.firebaseio.com',
      projectId: 'vuetify-spa-1a45a',
      storageBucket: 'vuetify-spa-1a45a.appspot.com',
      messagingSenderId: '477201719907'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
