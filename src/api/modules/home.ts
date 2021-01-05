/*
 * @Description:
 * @Author: liudehua
 * @Date: 2021-01-04 15:08:35
 * @LastEditTime: 2021-01-04 15:08:36
 * @LastEditors: liudehua
 */
import Http from '@/utils/axios';
const HomeApi = {
  getUser(params: Record<string, any>) {
    return Http.get('url', params);
  }
};

export default HomeApi;
