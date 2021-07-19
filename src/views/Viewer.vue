<template>
  <div class="viewer">
    <!-- display each generated url as an image on the viewer page -->
    <img v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" />
  </div>
</template>

<script>
export default {
  name: "Viewer",
  computed: {
    imgUrls() {
      return this.$store.state.imgUrls;
    },
  },
};
</script>

<style>
</style>