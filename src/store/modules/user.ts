/*
 * @Description:
 * @Author: liudehua
 * @Date: 2021-01-04 15:59:03
 * @LastEditTime: 2021-01-04 16:01:44
 * @LastEditors: liudehua
 */

const state = {
  token: '',
  name: '',
  avatar: '',
  menus: []
};

const mutations = {
  SET_TOKEN: (state: Record<string, any>, token: string) => {
    state.token = token;
  }
};

export default { namespaced: true, state, mutations };
