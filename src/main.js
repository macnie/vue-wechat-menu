import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';//引用ElementUI框架
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI);
Vue.prototype.$http =axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#el-menu',
  router,
  components: { App },
  template: '<App/>'
})
