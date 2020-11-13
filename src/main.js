import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin,BootstrapVueIcons, BButton } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
import VueMeta from 'vue-meta'
import getMockStrategy from "@/services/strategies/getMockStrategy";
import authPlugin from "@/plugins/authPlugin";


Vue.use(VueMeta)
Vue.use(authPlugin, {
	strategy: getMockStrategy([
		{
			email: "jim@example.com",
			password: "j1m"
		},
		{
			email: "bob@example.com",
			password: "b0b"
		}
	])
});

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
