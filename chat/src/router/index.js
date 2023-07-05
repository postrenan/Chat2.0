import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RoomSelectView from "@/views/RoomSelectView.vue";
import FirstRoom from "@/components/FirstRoom.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: LoginView
        },
        {
            path: '/salas',
            name: 'rooms',
            component: RoomSelectView
        },
        {
            path: '/sala',
            name: 'room1',
            component: FirstRoom
        }
    ]
})

export default router
