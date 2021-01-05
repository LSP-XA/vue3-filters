import { createStore } from 'vuex';
import getters from './getters';

const modulesFiles = require.context('./modules', true, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules: Record<string, any>, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;

  return modules;
}, {});

export default createStore({
  getters,
  modules
});
