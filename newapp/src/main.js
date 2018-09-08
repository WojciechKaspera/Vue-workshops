import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
import Veevalidate from 'vee-validate';

Vue.use(VueMaterial);
Vue.use(Veevalidate);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app')
