import Vue from 'vue'
import Router from 'vue-router'
import home from '@/containers/home.vue'
import core from '@/containers/core.vue'
import work from '@/containers/work.vue'
import note from '@/containers/note.vue'
import custom from '@/containers/iview-custom.vue'
import login from '@/containers/login.vue'
import {getCookie} from '../../static/js/cookie'

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      beforeEnter: (to, from, next) => {
        if (getCookie("admin")=='') {
            next("login");
        }else{
          next()
          }
      }
    },
    {
      path: '/core',
      name: 'core',
      component: core,
      beforeEnter: (to, from, next) => {
        if (getCookie("admin")=='') {
            next("login");
        }else{
          next()
          }
      }
    },
    {
      path: '/work',
      name: 'work',
      component: work,
      beforeEnter: (to, from, next) => {
        if (getCookie("admin")=='') {
            next("login");
        }else{
          next()
          }
      }
    },
    {
      path: '/note',
      name: 'note',
      component: note,
      beforeEnter: (to, from, next) => {
        if (getCookie("admin")=='') {
            next("login");
        }else{
          next()
          }
      }
    },
    {
      path: '/custom',
      name: 'custom',
      component: custom,
      beforeEnter: (to, from, next) => {
        if (getCookie("admin")=='') {
            next("login");
        }else{
          next()
          }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
