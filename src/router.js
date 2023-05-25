import { createRouter, createWebHistory } from 'vue-router'

//importiamo le rotte
import TeachersIndex from './pages/Teachers.index.vue'
import TeachersShow from './pages/Teachers.show.vue'

const history = createWebHistory()

const router = createRouter({

    history, 
    routes: [
        {
            path: '/',
            name: 'index',
            component: TeachersIndex,
        },
        {
            path: '/show',
            name: 'show',
            component: TeachersShow,
            props: true,
        }
    ]
})

export { router }