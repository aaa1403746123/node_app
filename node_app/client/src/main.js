import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from './http.js'
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
