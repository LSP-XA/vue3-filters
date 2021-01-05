import axios from 'axios';
console.log(process.env);
// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
  timeout: 10000 // request timeout
});

// 响应成功
function responseSuccess(response: Record<string, any>) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.data && response.data.code === 200) {
      return response.data.data || response.data;
    } else {
      return;
    }
  }
  // 异常状态下，把错误信息返回去
  Message({
    message: '网络错误',
    type: 'error'
  });
}
// 响应错误
function responseError(response: Record<string, any>) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (response.status === -404) {
    Message({
      message: response.msg,
      type: 'error'
    });
  }
  if (response.data && !response.data.success) {
    Message({
      message: response.msg,
      type: 'error'
    });
  }
  return response;
}

service.interceptors.request.use(
  (config: Record<string, any>) => {
    // 这里的config包含每次请求的内容
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Accept'] = 'application/json';
    const token = sessionStorage.getItem('loginToken') || null;
    console.log(config);
    if (token) {
      // 如果token不为null，否则传token给后台
      config.headers['Token'] = token;
    }
    return config;
  },
  (error: Record<string, any>) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.resolve(error.response);
  }
);

// 请求方式配置
const Http: Record<string, any> = {};
Http.post = function(url: string, data: Record<string, any>) {
  return axios({
    method: 'post',
    url,
    data
  })
    .then((Response: Record<string, any>) => {
      return responseSuccess(Response);
    })
    .catch((Response: Record<string, any>) => {
      console.log('网络异常，或请求错误');
      return responseError(Response);
    });
};
Http.get = function(url: string, params: Record<string, any>) {
  // get
  return axios({
    method: 'get',
    url,
    params // get 请求时带的参数
  })
    .then((Response) => {
      return responseSuccess(Response);
    })
    .catch((Response) => {
      return responseError(Response);
    });
};

export default Http;
