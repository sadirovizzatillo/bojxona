import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.use(VueApexCharts)

Vue.component("apexCharts", VueApexCharts)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
