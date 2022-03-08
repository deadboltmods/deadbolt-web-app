import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueGtag from "vue-gtag";
import VueScrollactive from 'vue-scrollactive';
import '@/modules/registerServiceWorker'
//import meta from '@/modules/meta'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-RZ7LPTDQ97" }
});

Vue.use(VueScrollactive);

new Vue({
  router,
  store,
  //meta,
  render: h => h(App)
}).$mount('#app')
