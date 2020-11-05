import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin,BootstrapVueIcons, BButton } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons,BButton)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
