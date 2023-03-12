import axios from "axios";
import router from "../router/index";

let baseURL = "";
if (process.env.NODE_ENV === "production") {
  baseURL = "http://39.108.85.104:3066";
}

//利用axios对象的方法create，去创建一个axios实例
const service = axios.create({
  //基础路径
  baseURL,
  //请求超时时间   （5s内没响应就失败了）
  timeout: 5000,
});

//请求拦截器
//axios实例的拦截器的request请求使用配置对象，返回配置对象
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    //进度条开始
    //请求成功的返回配置对象
    return config;
  },
  (error) => {
    //请求失败的返回，后面的then或者catch回调随便写不写
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    //进度条结束
    //响应成功的返回
    return response.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        router.push("/login");
      }
    }
    //响应失败的返回
    return Promise.reject(error);
  }
);

//导出axios实例
export default service;
