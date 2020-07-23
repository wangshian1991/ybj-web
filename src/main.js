import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import vueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import routers from './router.config';

Vue.use(Element);
Vue.use(vueRouter);
Vue.config.productionTip = false

const router = new vueRouter(routers);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
