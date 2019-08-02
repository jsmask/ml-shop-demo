import Toast from "./Toast.vue"
const obj = {};
obj.toast = null;
obj.install = Vue => {
    const toastContrustor = Vue.extend(Toast);
    const toast = new toastContrustor();
    toast.$mount(document.createElement("div"));
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = obj.toast = toast;
}

obj.show = (options) => {
    if (!obj.toast) return;
    obj.toast.show(options)
}

export default obj;