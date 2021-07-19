<template>
  <div class="home">
    <h1>Vuex Getters & Actions</h1>
    <button @click="getDogImage">Get Dog Image</button>
    <br />
    <!-- lists the stored image url and dog breed dynamically -->
    <h3>Generated Image Urls</h3>
    <ul>
      <li v-for="imgUrl in imgUrls" :key="imgUrl">
        {{ imgUrl }}
      </li>
    </ul>
    <h3>Generated Dog Breeds</h3>
    <ul>
      <li v-for="dogBreed in dogBreeds" :key="dogBreed">
        {{ dogBreed }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    imgUrls() {
      return this.$store.state.imgUrls;
    },
    dogBreeds() {
      // getters are stored in store.getters
      return this.$store.getters.dogBreeds;
    }
  },
  methods: {
    getDogImage() {
      // you can call an action with method .dispatch()
      this.$store.dispatch("fetchAddImg");
    },
  },
};
</script>
