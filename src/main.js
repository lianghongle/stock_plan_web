import Vue from 'vue'
import App from './App.vue'

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// vue-router
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
import router from './router'

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
