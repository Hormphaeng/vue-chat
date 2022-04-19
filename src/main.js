import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PubNubVue from 'pubnub-vue';
import PubnubConfig from './pubnubconfig'

// Pligin uses
Vue.config.productionTip = false
Vue.use(PubNubVue, PubnubConfig)

// Vue.use(PubNubVue, {
//   publishKey: 'pub-c-b5a21f20-962c-4dea-b1f0-6ffc3ee455bf',
//   subscribeKey: 'sub-c-0b024b80-acb4-11ec-9ae2-de198fffb17e',
//   // ssl: true,
//   secretKey: 'sec-c-OTI3YjJiM2YtNmZhNC00NDRmLThmMjQtZjY2ODJmYjUzMTRi'
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
