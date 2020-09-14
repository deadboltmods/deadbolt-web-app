import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/modules/registerServiceWorker'
//import meta from '@/modules/meta'

Vue.config.productionTip = false

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

new Vue({
  router,
  store,
  //meta,
  render: h => h(App)
}).$mount('#app')
