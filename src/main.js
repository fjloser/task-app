import Vue from 'vue'
import App from './App'
import {ajax} from './api/myrequest/request.js'
console.log(ajax)
Vue.config.productionTip = false
Vue.prototype.$ajax = ajax
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
