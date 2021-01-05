/*
 * @Description:
 * @Author: liudehua
 * @Date: 2021-01-04 13:55:11
 * @LastEditTime: 2021-01-04 13:57:37
 * @LastEditors: liudehua
 */
import Http from '@/utils/axios';
const UserApi = {
  getUser(params: Record<string, any>) {
    return Http.get('url', params);
  }
};

export default UserApi;
