<template>
  <div id="app">
    <div class="multiselect__component-wrapper">
      <label class="visually-hidden typo__label">Selecciona un estado</label>
      <multiselect 
        v-model="value"
        placeholder="Selecciona o introduce un estado"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addState"
      >
      </multiselect>
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

  .multiselect__component-wrapper {
    max-width: 300px;
    margin: 30px auto;
  }

  .multiselect {
    margin-top: 20px;
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }

</style>
