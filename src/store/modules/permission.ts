/*
 * @Description:
 * @Author: liudehua
 * @Date: 2021-01-04 16:07:51
 * @LastEditTime: 2021-01-04 16:10:00
 * @LastEditors: liudehua
 */

const state = {
  routes: []
};

const mutations = {
  SET_ROUTES: (state: Record<string, any>, routes: Record<string, any>) => {
    state.routes = routes;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
