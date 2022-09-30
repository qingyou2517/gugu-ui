import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router';
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history=createWebHashHistory()
const router=createRouter({
  history,
  routes:[
    {
      path:'/',
      component:Frank
    },
    {
      path:'/xxx',
      component:Frank2
    },
  ]
})

const app=createApp(App)
app.mount(('#app'))
app.use(router)

