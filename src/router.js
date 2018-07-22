import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import ViewPaste from './pages/ViewPaste.vue'
import List from "./pages/List.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/paste/:reference',
      name: 'view_paste',
      component: ViewPaste,
      props: true
    },
    {
      path: '/list/:page',
      name: 'view_all_pastes',
      component: List,
      props: true
    }
  ]
})
