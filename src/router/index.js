import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['../components/base/login.vue'], resolve)
      }
    },
    {
      path: '/',
      name: 'home',
      component: resolve => {
        require(['../components/base/home.vue'], resolve)
      },
      children: [
               {
          path:'/',
          name:'index',
          redirect:'index'
        },
        {
          path: '/analysisform',
          name: 'analysisform',
          component: resolve => {
            require(['../page/analysisform.vue'], resolve)
          }
        },
        {
          path: '/touristimg',
          name: 'touristimg',
          component: resolve => {
            require(['../page/touristimg.vue'], resolve)
          }
        },
        {
          path: '/touristexp',
          name: 'touristexp',
          component: resolve => {
            require(['../page/touristexp.vue'], resolve)
          }
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: resolve => {
            require(['../page/analysis.vue'], resolve)
          }
        },
        {
          path: '/scenic',
          name: 'scenic',
          component: resolve => {
            require(['../page/tourHot/scenic.vue'], resolve)
          }
        },
        {
          path: '/hotmap',
          name: 'hotmap',
          component: resolve => {
            require(['../page/tourHot/hotmap.vue'], resolve)
          }
        },
        {
          path: '/index2',
          name: 'Index',
          component: resolve => {
            require(['../page/tourHot/index.vue'], resolve)
          }
        },
        {
          path: '/index',
          name: 'Index',
          component: resolve => {
            require(['../page/tourHot/index3.vue'], resolve)
          }
        },
        {
          path:'platform',
          name:'platform',
          component: resolve => {
            require(['../page/tourHot/platform.vue'], resolve)
          }
        },
        {
          path: '/destination',
          name: 'destination',
          component: resolve => {
            require(['../page/tourHot/destination.vue'], resolve)
          }
        }
      ]
    }
  ]
})
