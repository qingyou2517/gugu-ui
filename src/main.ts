import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Doc from  './views/Doc.vue'

const history=createWebHashHistory()
const router=createRouter({
  history,
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/doc',
      component:Doc
    },
  ]
})

const app=createApp(App)
app.mount(('#app'))
app.use(router)

