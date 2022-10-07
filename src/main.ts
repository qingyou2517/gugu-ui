import "./lib/gugu.scss";
import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {router} from './router';
import './assets/svg.js'
import 'github-markdown-css'

const app = createApp(App);
app.mount(('#app'));
app.use(router);

