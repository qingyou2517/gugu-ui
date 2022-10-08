import "./lib/gugu.scss";
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import './assets/svg.js'
import 'github-markdown-css'

const app = createApp(App);
app.use(router);
app.mount(document.getElementById('app'));


