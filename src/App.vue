<template>
  <div id="app">
      <div class="section__selection">
        <SelectedItem
          v-bind:selectedStates="selectedStates"
          v-on:del-selected="deleteSelected($event)"
        />
        <Multiselector v-bind:states="states" v-on:select-state="selectState($event)"/>
      </div>
  </div>
</template>

<script>
import Multiselector from "./components/Multiselector.vue";
import SelectedItem from "./components/SelectedItem.vue";

export default {
  name: "app",
  components: {
    Multiselector,
    SelectedItem
  },

  data() {
    return {
      states: [],
      selectedStates: []
    };
  },

  methods: {
    selectState(state) {
      if (this.selectedStates.includes(state)) {
        this.selectedStates = this.selectedStates.filter(
        selectedState => selectedState !== state
      )} else {
        this.selectedStates = [...this.selectedStates, state];
      }
    },

    deleteSelected(state) {
      this.selectedStates = this.selectedStates.filter(
        selectedState => selectedState !== state
      );
    }
  },

  created() {
    fetch(
      "https://raw.githubusercontent.com/AntonellaM/american-states-json/master/db.json"
    )
      .then(res => res.json())
      .then(states => (this.states = states));
  }
};
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  body {
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
  .section {
    &__selection {
      width: 220px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
  }
</style>