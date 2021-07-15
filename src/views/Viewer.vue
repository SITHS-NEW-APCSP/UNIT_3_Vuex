<template>
  <div class="viewer">
    <p>Stored Number: {{ count }}</p>
    <p>
      <i
        >Notice that the count variable remains the same throughout all the
        views/components!</i
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Viewer",
  computed: {
    count() {
      // even if it's a different file/component, Viewer.vue can access
      // the same state from Vuex, which persists when you switch routes
      // (but not when you reload!)
      return this.$store.state.count;
    },
  },
};
</script>

<style>
</style>