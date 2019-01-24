import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/pc/pc-first/firstPage'
import SecondPage from '@/components/pc/pc-second/pcSecond'
import LifeCycle from '@/components/pc/lifeCycle/lifeCycle'
import vuexTest from '@/components/pc/vuex-test/parents'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/pcSecond',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/lifeCycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/vuex-test',
      component: vuexTest
    }
  ]
})

// 验证权限
router.beforeEach((to, from, next) => {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // window.location.href = 'http://' + window.location.host + '/m_index.html#/tabs/home';
    window.location.href = '/m_index.html#/tabs/home';
    return
  }
  next()
})

export default router
