// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../../router/pc/index'
import i18n from '../../locale/lang/pc/i18n/i18n'
// import '../../style/pc/pc-first/index.scss'
import '../../style/pc/index.scss'
import store from '../../store'
import 'jquery'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
