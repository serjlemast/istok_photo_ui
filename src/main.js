import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'
// import Lightbox from '@morioh/v-lightbox'

// import '@morioh/v-lightbox/dist/lightbox.css';



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
// Vue.use(Lightbox);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
