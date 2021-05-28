import Vue from 'vue'
import App from './App'
import {ajax} from '@/api/myrequest/request.js'

Vue.config.productionTip = false
Vue.propotype.$ajax = ajax
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
