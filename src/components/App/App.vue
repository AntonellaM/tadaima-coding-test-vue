<template>
  <div id="app">
    <header class="header">
      <div class="header__logo"></div>
      <h1 class="header__title">
        Tadaima Coding Test
      </h1>
    </header>
    <main>
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
    </main>
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

<style lang="scss">

  body {
    min-height: 100vh;
    background-image: linear-gradient(-45deg, #FF7555, #FF5572);
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &__logo {
      height: 50px;
      width: 50px;
      margin: 0 20px;
      background-image: url("../../assets/logo.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    &__title {
      color: #fff;
      font-size: 35px;
      font-family: 'Petit Formal Script', cursive;
    }
  }

  .multiselect__component-wrapper {
    max-width: 300px;
    margin: 30px auto;
  }

  .multiselect {
    margin-top: 20px;
  }

  .multiselect__tag, .multiselect__element span {
    color: black;
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
  }

</style>
