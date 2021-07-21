<template>
  <div class="home">
    <h1>Vuex Getters & Actions</h1>
    <button @click="getDogImage">Get Dog Image</button>
    <button @click="getCatImage">Get Cat Image</button>
    <br />
    <div class="container">
      <div class="sub-container dogs">
        <h3>Dog Image Urls</h3>
        <ul>
          <li v-for="dogImgUrl in dogImgUrls" :key="dogImgUrl">
            {{ dogImgUrl }}
          </li>
        </ul>
        <h3>Generated Dog Breeds</h3>
        <ul>
          <li v-for="dogBreed in dogBreeds" :key="dogBreed">
            {{ dogBreed }}
          </li>
        </ul>
      </div>
      <div class="sub-container cats">
        <h3>Cat Image Urls</h3>
        <ul>
          <li v-for="catImgUrl in catImgUrls" :key="catImgUrl">
            {{ catImgUrl }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    // states are referenced with dot notation
    // realize that you put the module name after `.state`
    dogImgUrls() {
      return this.$store.state.dogs.dogImgUrls;
    },
    catImgUrls() {
      return this.$store.state.cats.catImgUrls;
    },
    // getters are referenced by a string index
    dogBreeds() {
      return this.$store.getters["dogs/dogBreeds"];
    },
  },
  methods: {
    getDogImage() {
      // reference specific action by prefixing it with the correct module name
      this.$store.dispatch("dogs/fetchAddImg");
    },
    getCatImage() {
      this.$store.dispatch("cats/fetchAddImg");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.sub-container {
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-grow: 1;
}
</style>
