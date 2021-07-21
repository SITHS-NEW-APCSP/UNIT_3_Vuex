// this is an example of a module, which is defined as an object
// the objects'/modules' properties are the same as in base Vuex instance
const dogs = {
    state: {
        dogImgUrls: [],
    },
    mutations: {
        addImgUrl(state, data) {
            state.dogImgUrls.push(data);
        },
    },
    actions: {
        async fetchAddImg({ commit }) {
            try {
                const res = await fetch(
                    "https://dog.ceo/api/breeds/image/random"
                );
                const data = await res.json();
                commit("addImgUrl", data.message);
            } catch (err) {
                console.error(err);
            }
        },
    },
    getters: {
        dogBreeds: (state) => {
            return state.dogImgUrls.map(
                (imgUrl) => imgUrl.slice(30).split("/")[0]
            )
        }
    },
    // setting namespaced to "true" lets us separate the names of mutations and actions
    // from other modules. By default, if you call dispatch('fetchAddImg') it will execute the
    // same action from both dogs.js and cats.js. If namespaced is "true", you will have to call
    // dispatch('dog/fetchAddImg') to specify executing the action in dogs.js.
    namespaced: true,
};

export default dogs;
