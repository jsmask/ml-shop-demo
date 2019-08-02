import Loading from './Loading.vue';

const obj = {};
obj._loading = null;

obj.install = Vue => {
    const loadingContrustor = Vue.extend(Loading);
    const loading = new loadingContrustor();
    loading.$mount(document.createElement("div"));
    document.body.appendChild(loading.$el);
    Vue.prototype.$loading = obj._loading = loading;
}

obj.show = () => {
    if (!obj._loading) return;
    obj._loading.show()
}

obj.hide = () => {
    if (!obj._loading) return;
    obj._loading.hide()
}

export default obj;