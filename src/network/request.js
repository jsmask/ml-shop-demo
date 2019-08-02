import axios from 'axios'
import Loading from 'components/common/loading';
import Toast from 'components/common/toast';
import { keys } from 'common/global';


const request = options => {
    const instance = axios.create({
        baseURL: keys.baseURL, //配置请求服务器路径
        timeout: 10000 //超时
    })

    instance.interceptors.request.use(options => {
        Loading.show();
        return options;
    })

    instance.interceptors.response.use(res => {
        Loading.hide();
        return res.data;
    }, err => {
        Loading.hide();
        Toast.show("系统错误");
    })

    return instance(options);
}

export default request;