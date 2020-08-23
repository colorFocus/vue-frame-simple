import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/index.vue'),
      redirect: { name: 'demo' },
      children: [
        {
          path: 'demo',
          name: 'demo',
          component: () => import('./views/Demo.vue')
        },
      ]
    }
  ]
})
