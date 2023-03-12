import VueRouter from 'vue-router'
import Index from './components/Index'
const routes = [

  {path: '/index/menu1', component: () => import('./components/Main1')},
  {path: '/index/menu2', component: () => import('./components/Main2')},
  {path: '/index/menu3', component: () => import('./components/Main3')}

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
