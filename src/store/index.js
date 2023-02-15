import { createStore } from "vuex";

export default createStore({
  state: {
    aosOptions: {
      duration: 1200,
      delay: 400,
      disable: "mobile",
    },
  },
  getters: {
    aosOptions(state) {
      return state.aosOptions;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
