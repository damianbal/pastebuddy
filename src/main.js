import Vue from 'vue'
import App from './App.vue'
import router from './router'

import LoadingComponent from "./components/LoadingComponent"

Vue.component('LoadingComponent', LoadingComponent)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
