// loader.ts

import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

// Define the loader state interface
export interface LoaderState {
  isLoading: boolean;
}

interface RootState {
  loader: LoaderState;
}

const state: LoaderState = {
  isLoading: false,
};

const mutations: MutationTree<LoaderState> = {
  setLoading(state, payload: boolean) {
    state.isLoading = payload;
  },
};

const actions: ActionTree<LoaderState, RootState> = {
  startLoading({ commit }) {
    commit('setLoading', true);
  },
  stopLoading({ commit }) {
    commit('setLoading', false);
  },
};

const getters: GetterTree<LoaderState, RootState> = {
  isLoading: (state) => state.isLoading,
};

const loaderModule: Module<LoaderState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export default loaderModule;
