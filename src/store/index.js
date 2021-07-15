import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // you can define variables and/or objects to "store" in your Vuex state
        count: 0,
    },
    mutations: {
        // mutations are defined functions that can alter variables in your state
        increment(state) {
            state.count++;
        },
    },
});
