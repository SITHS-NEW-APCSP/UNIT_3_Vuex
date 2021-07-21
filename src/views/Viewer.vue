<template>
  <div class="viewer">
    <!-- display each generated url as an image on the viewer page -->
    <div class="container">
      <div class="sub-container">
        <h2>Dogs</h2>
        <img
          v-for="dogImgUrl in dogImgUrls"
          :key="dogImgUrl"
          :src="dogImgUrl"
        />
      </div>
      <div class="sub-container">
        <h2>Cats</h2>
        <img
          v-for="catImgUrl in catImgUrls"
          :key="catImgUrl"
          :src="catImgUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Viewer",
  computed: {
    dogImgUrls() {
      return this.$store.state.dogs.dogImgUrls;
    },
    catImgUrls() {
      return this.$store.state.cats.catImgUrls;
    },
  },
};
</script>

<style>
.container {
  display: flex;
}
.sub-container {
  flex-basis: 100%;
  flex-grow: 1;
}
img {
  max-width: 100%;
}
</style>