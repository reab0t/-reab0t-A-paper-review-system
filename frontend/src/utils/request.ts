typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from ‘axios’;
import { ElMessage, ElMessageBox } from ‘element-plus’;
import { useUserStore } from ‘@/stores/user’;

// 创建 axios 实例
const service: AxiosInstance = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
timeout: import.meta.env.VITE_API_TIMEOUT,
headers: {
‘Content-Type’: ‘application/json;charset=utf-8’,
},
});

// 请求拦截器
service.interceptors.request.use(
(config: AxiosRequestConfig) => {
const userStore = useUserStore();
if (userStore.token) {
config.headers = {
…config.headers,
‘Authorization’: Bearer ${userStore.token},
};
}
return config;
},
(error) => {
console.error(‘Request error:’, error);
return Promise.reject(error);
}
);

// 响应拦截器
service.interceptors.response.use(
(response: AxiosResponse) => {
const { code, message, data } = response.data;

// 如果是二进制文件，直接返回
if (response.config.responseType === 'blob') {
  return response.data;
}

// 约定的业务状态码处理
if (code === 200) {
  return data;
} else {
  ElMessage.error(message || 'Error');
  return Promise.reject(new Error(message || 'Error'));
}
},
(error) => {
const { response } = error;

if (response && response.status) {
  const errorMessage = {
    400: '请求错误',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '请求地址出错',
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时',
  }[response.status] || `连接错误${response.status}`;

  if (response.status === 401) {
    ElMessageBox.confirm(
      '登录状态已过期，您可以继续留在该页面，或者重新登录',
      '系统提示',
      {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning',
      }
    ).then(() => {
      const userStore = useUserStore();
      userStore.logout();
      window.location.reload();
    });
  } else {
    ElMessage.error(errorMessage);
  }
  return Promise.reject(error);
}

ElMessage.error('网络连接异常，请稍后重试！');
return Promise.reject(error);
}
);

// 封装 GET 请求
export function get<T>(url: string, params?: object): Promise<T> {
return service.get(url, { params });
}

// 封装 POST 请求
export function post<T>(url: string, data?: object): Promise<T> {
return service.post(url, data);
}

// 封装 PUT 请求
export function put<T>(url: string, data?: object): Promise<T> {
return service.put(url, data);
}

// 封装 DELETE 请求
export function del<T>(url: string): Promise<T> {
return service.delete(url);
}

// 封装上传文件请求
export function upload<T>(url: string, file: File): Promise<T> {
const formData = new FormData();
formData.append(‘file’, file);
return service.post(url, formData, {
headers: {
‘Content-Type’: ‘multipart/form-data’,
},
});
}

// 封装下载文件请求
export function download(url: string, params?: object): Promise<Blob> {
return service.get(url, {
params,
responseType: ‘blob’,
});
}

export default service;