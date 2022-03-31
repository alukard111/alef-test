import state from './moduleFormState.js';
import mutations from './moduleFormMutations.js';
import actions from './moduleFormActions.js';
import getters from './moduleFormGetters.js';

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};