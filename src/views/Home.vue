<template>
  <div class="home">
    <h1>Vuex Simple Demo</h1>
    <p>Current Number: {{ countNum }}</p>
    <button @click="increment">Increment</button>
    <p>
      After incrementing your number, click "Viewer" to change routes and see
      Vuex in action!
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    countNum() {
      // you can call the store object using this.$store
      // you access the state and its items using dot notation
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      // to execute any defined mutations, use .commit()
      // and pass in the name of the mutation as a string
      this.$store.commit("increment");
    },
  },
};
</script>
