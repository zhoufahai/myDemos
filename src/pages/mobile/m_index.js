// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from '../../router/mobile/index'
// import '../../style/mobile/index.scss'
import '../../style/mobile/themes/common.scss'

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 设置页面字体大小
function setFont () {
  let deviceWidth = document.documentElement.clientWidth

  if (deviceWidth > 750) {
    deviceWidth = 750
  }
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  document.body.style.width = deviceWidth + 'px'
}

window.onresize = function () {
  setFont()
}

setFont()
