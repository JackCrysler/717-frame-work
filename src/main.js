//引用common style
import './css/reset.css'
import './font/iconfont.css'
//引用框架和配置文件
import Vue from 'vue'
import Router from './routes/router.config'
import App from './App.vue'

new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})
