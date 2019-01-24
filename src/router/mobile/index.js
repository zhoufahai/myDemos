import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/mobile/m-first/firstPage'
import Tabs from '@/components/mobile/tabs/index'
import Home from '@/components/mobile/home/index'
import Market from '@/components/mobile/market/index'
import Me from '@/components/mobile/me/index'
import Demo1 from '@/components/mobile/demo1/demo1'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/tabs',
      component: Tabs,
      redirect: '/tabs/home',
      children:[
        {
          path: 'home',
          component: Home
        },
        {
          path: 'market',
          component: Market
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/m-first',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    }
  ]
})

// 验证权限
router.beforeEach((to, from, next) => {
  if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = 'http://' + window.location.host + '/p_index.html#';
    return
  }
  next();
})

export default router
