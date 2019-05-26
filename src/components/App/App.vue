<template>
  <div id="app">
    <div class="multiselect__component-wrapper">
    
      <label class="typo__label">Selecciona un estado</label>
            

      <multiselect 
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

      <img src="http://utatti.github.io/perfect-scrollbar/azusa.jpg" height="720" width="1280" alt="">
    </div>
  </div>
</template>

<script>
import Multiselect from "./../Multiselect/Multiselect.vue";
import uuid from "uuid";

export default {
  components: {
    Multiselect,
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
  .grey-color::v-deep .multiselect {
    .multiselect__tags .multiselect.invalid .multiselect__tags span,
  .multiselect.invalid .multiselect__tags input {
    background:blue;
  }
}
  .multiselect__component-wrapper {
    max-width: 300px;
  }
  .multiselect.invalid .multiselect__tags,
  .multiselect.invalid .multiselect__tags span,
  .multiselect.invalid .multiselect__tags input {
    background:blue;
  }
</style>
