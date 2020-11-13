import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin,BootstrapVueIcons, BButton } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
import VueMeta from 'vue-meta'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const token = localStorage.getItem('access_token')
if (token) {
	axios.defaults.headers.common['Authorization'] = token
}

Vue.use(VueMeta)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons,BButton)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
