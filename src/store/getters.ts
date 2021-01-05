const getters = {
  token: (state: Record<string, any>) => state.user.token,
  avatar: (state: Record<string, any>) => state.user.avatar,
  name: (state: Record<string, any>) => state.user.name,
  roles: (state: Record<string, any>) => state.user.roles,
  routes: (state: Record<string, any>) => state.permission.routes
};
export default getters;
