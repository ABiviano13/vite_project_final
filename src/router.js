import { createRouter, createWebHistory } from 'vue-router'

//importiamo le rotte
import Home from './pages/Home.vue'
import TeachersIndex from './pages/Teachers.index.vue'
import TeachersShow from './pages/Teachers.show.vue'

const history = createWebHistory()

const router = createRouter({

    history, 
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'teachers.index',
            component: TeachersIndex,
        },
        {
            path: '/show/:id',
            name: 'teachers.show',
            component: TeachersShow,
            props: true,
        }
    ]
})

export { router }