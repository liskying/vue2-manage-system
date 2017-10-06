import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/Hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/Test',
            name: 'Test',
            component: Test
        }
    ]
})