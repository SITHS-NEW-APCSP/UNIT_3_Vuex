// this is an example of a module, which is defined as an object
// the objects'/modules' properties are the same as in base Vuex instance
const cats = {
    state: {
        catImgUrls: [],
    },
    mutations: {
        addImgUrl(state, data) {
            state.catImgUrls.push(data);
        },
    },
    actions: {
        async fetchAddImg({ commit }) {
            try {
                const res = await fetch(
                    "https://api.thecatapi.com/v1/images/search"
                );
                const data = await res.json();
                commit("addImgUrl", data[0].url);
            } catch (err) {
                console.error(err);
            }
        },
    },
    // setting namespaced to "true" lets us separate the names of mutations and actions
    // from other modules. By default, if you call dispatch('fetchAddImg') it will execute the
    // same action from both dogs.js and cats.js. If namespaced is "true", you will have to call
    // dispatch('cats/fetchAddImg') to specify executing the action in cats.js.
    namespaced: true,
};

export default cats;
