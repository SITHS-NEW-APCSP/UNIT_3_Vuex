import Vue from "vue";
import Vuex from "vuex";
// importing modules from js files in the modules folder
import cats from "./modules/cats";
import dogs from "./modules/dogs";

Vue.use(Vuex);

export default new Vuex.Store({
    // you include modules like this when declaring the Vuex instance
    // unless you want a base state, you don't need to define them
    modules: {
        dogs,
        cats,
    },
});
