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

            require(['@/components/map/indexMap.vue'], resolve)
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
          path: 'errlog',
          name: 'errlog',
          component: resolve => {
            require(['../page/ErrLog.vue'], resolve)
          }
        },
        {
          path: 'reqlog',
          name: 'reqlog',
          component: resolve => {
            require(['../page/ReqLog.vue'], resolve)
          }
        },
        {
          path: 'report',
          name: 'report',
          component: resolve => {
            require(['../page/report/report.vue'], resolve)
          }
        },
        {
          path: 'photo',
          name: 'photo',
          component: resolve => {
            require(['../page/report/photo.vue'], resolve)
          }
        },
        {
          path: 'reportDownload',
          name: 'reportDownload',
          component: resolve => {
            require(['../page/report/reportDownload.vue'], resolve)
          }
        },
        {
          path: 'map',
          name: 'map',
          component: resolve => {
            require(['../page/coreFlow/ynmap.vue'], resolve)
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
            require(['../page/tourHot/index2.vue'], resolve)
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
        },
        {
          path: '/quota',
          name: 'quota',
          component: resolve => {
            require(['../page/quota/index.vue'], resolve)
          }
        },
        {
          path: '/coreFlow',
          name: 'coreFlow',
          component: resolve => {
            require(['../page/coreFlow/index.vue'], resolve)
          }
        },
        {
          path: '/coreFlow/list',
          name: 'coreFlow',
          component: resolve => {
            require(['../page/coreFlow/listInfo.vue'], resolve)
          }
        }
      ]
    }
  ]
})
