import Vue from 'vue'
import Router from 'vue-router'
import home from '@/containers/home.vue'
import core from '@/containers/core.vue'
import work from '@/containers/work.vue'
import note from '@/containers/note.vue'
import custom from '@/containers/iview-custom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/core',
      name: 'core',
      component: core
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/custom',
      name: 'custom',
      component: custom
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
