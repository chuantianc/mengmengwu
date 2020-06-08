import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home'
import Translate from './components/Translate'
import Editor from './components/Editor'


Vue.use(Router);
export default new Router({
    mode: 'history', // 去掉url中的#
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/trans',
            name: 'trans',
            component: Translate
        },
        {
            path: '/editor',
            name: 'editor',
            component: Editor
        }
    ]
})

