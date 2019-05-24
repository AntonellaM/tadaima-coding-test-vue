<template>
  <div id="app">
    <div>
      <label class="typo__label">Selecciona un estado</label>
      <multiselect 
      :class="{invalid:myValue === null}"
        v-model="value"
        placeholder="Selecciona un estado"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addState"
      >
        <option v-for="option in options" v-bind:key="option.code" value="option.name">{{ option }}</option>
      </multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import uuid from "uuid";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      value: [],
      options: []
    };
  },
  methods: {
    addState(newState) {
      const state = {
        name: newState,
        code: newState.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(state);
      this.value.push(state);
    }
  },
  created() {
    fetch(
      "https://raw.githubusercontent.com/AntonellaM/american-states-json/master/db.json"
    )
      .then(res => res.json())
      .then(states => {
        const newArr = Object.values(states);
        this.options = newArr.map(state => {
          return {
            name: state,
            code: uuid.v4()
          };
        });
      });
  }
};
</script>

<style lang="scss" scoped>
  .multiselect__tag {
    background-color: lightgrey;
  }
</style>
