import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import store from './store';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

import util from './libs/util';
import axios from 'axios';
axios.defaults.baseURL = 'http://155.test.intra.guocihuatai.com';
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Vue.prototype.$util = util;

Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted () {
        this.$store.commit('updateMenulist');
    }
});
