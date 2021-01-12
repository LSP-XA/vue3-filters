/*
 * @Description:
 * @Author: liudehua
 * @Date: 2021-01-07 10:38:09
 * @LastEditTime: 2021-01-12 09:39:32
 * @LastEditors: liudehua
 */
import { getCurrentInstance } from 'vue';

const Route = {
  getRoute: function() {
    const instance: any = getCurrentInstance();
    return instance.ctx.$router.currentRoute.value;
  }
};

export default Route;
