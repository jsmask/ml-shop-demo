import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { global } from 'common/global'
import FastClick from 'fastclick'
import lazyload from 'vue-lazyload'
import "common/rem"

import Loading from 'components/common/loading'
import Toast from 'components/common/toast'

Vue.config.productionTip = false;

FastClick.attach(document.body);

Vue.prototype.$bus = new Vue();
Vue.prototype.$global = global;


Vue.use(lazyload, {
    loading: require("../src/assets/img/common/placeholder.png")
});

Vue.use(Loading);
Vue.use(Toast);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')