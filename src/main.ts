import "./lib/gugu.scss";
import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {router} from './router';
import './lib/svg.js'

const app = createApp(App);
app.mount(('#app'));
app.use(router);

