import Vue from 'vue'
import App from './App'
import {ajax} from './api/myrequest/request.js'
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$ajax = ajax
App.mpType = 'app'

import'@/static/iconfont/iconfont.css'
const app = new Vue({
  ...App,
  store
})
app.$mount()
