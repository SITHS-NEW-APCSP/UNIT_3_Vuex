import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // an array to store fetched image urls of dogs
        imgUrls: [],
    },
    mutations: {
        // add an image into array in state
        addImgUrl(state, data) {
            state.imgUrls.push(data);
        },
    },
    // actions typically call on mutations to make one or more changes to the state
    // unlike mutations, actions can be asynchronous (async/await; can be used to fetch data)
    actions: {
        async fetchAddImg({ commit }) {
            // this functions fetches the data from the dog ceo api and adds it to `imgUrls` using a mutation
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await res.json();
            commit('addImgUrl', data.message);
        },
    },
    // getters are used to return a specific selection/modification of the state
    // e.g. you want to filter specific values inside the state, or modify them before 
    // the vue component gets it
    getters: {
        // dogBreeds is a getter that returns only the dog breed type of each image Url
        dogBreeds: state => {
            return state.imgUrls.map(imgUrl => imgUrl.slice(30).split('/')[0])
            // utilize fancy string methods to get dog breed name from url
        }
    }
});
