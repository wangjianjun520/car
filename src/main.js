// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'
import store from './store/'

import i18n from './i18n/';

require('vue2-animate/dist/vue2-animate.min.css')



Vue.use(axios)
Vue.use(ElementUI)


Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
