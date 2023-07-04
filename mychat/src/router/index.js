import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseView from '../views/BaseView.vue'
import Rooms from '../components/Rooms.vue'
import Chat from '../components/Chat.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})

export default router
