import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/modules/registerServiceWorker'
import VueScrollactive from 'vue-scrollactive';
import VueGtag from "vue-gtag";
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueGtag, {
	config: { id: "G-RZ7LPTDQ97" },
	params: { send_page_view: true },
}, router);

Vue.use(VueScrollactive);

Vue.use(VueMeta)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
