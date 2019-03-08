import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/index.js';
import router from './router/index.js';
import 'normalize.css';
import App from './App.vue'
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}
Vue.use(Vant);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
