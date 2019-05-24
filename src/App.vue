<template>
  <div id="app">
    <SelectedItem 
    v-for="state in selectedStates" v-bind:key="state"
    v-on:select-state="selectedStates" :del-selected="deleteSelected"/>
    <Multiselector v-bind:states="states" />
  </div>
</template>

<script>
import Multiselector from './components/Multiselector.vue'
import SelectedItem from './components/SelectedItem.vue'

export default {
  name: 'app',
  components: {
    Multiselector,
    SelectedItem
  },

  data() {
    return {
      states: [],
      selectedStates: [],
    }
  },

  methods: {
    selectState(selectedState) {
      this.selectedStates = this.selectedStates.push(selectedState);
    },

    deleteSelected(deletedState) {
      this.selectedStates = this.selectedStates.filter(state => state === selectedState);
    }
  },

  created() {
    fetch('https://raw.githubusercontent.com/AntonellaM/american-states-json/master/db.json')
      .then(res => res.json())
      .then(states => this.states = states)
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
