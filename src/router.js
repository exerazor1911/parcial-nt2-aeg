import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Notas from './components/Notas'
import Respuestas from './components/Respuestas'

export const router  = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Notas},
        {path: '/notas', component: Notas},
        {path: '/respuestas', component: Respuestas},
    ]
})