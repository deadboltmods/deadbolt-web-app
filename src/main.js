import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/modules/registerServiceWorker'
//import meta from '@/modules/meta'
import VueScrollactive from 'vue-scrollactive';
import VueGtag from "vue-gtag";
import titleMixin from './mixins/titleMixin'

Vue.config.productionTip = false

Vue.use(VueGtag, {
	config: { id: "G-RZ7LPTDQ97" },
	params: { send_page_view: true },
}, router);

Vue.use(VueScrollactive);

Vue.mixin(titleMixin)

new Vue({
	router,
	store,
	//meta,
	render: h => h(App)
}).$mount('#app')
