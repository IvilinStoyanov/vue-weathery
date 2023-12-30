import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const initialState = {
  weatherData: {}
};

export const state = { ...initialState };

export default {
  state,
  actions,
  mutations,
  getters
};
