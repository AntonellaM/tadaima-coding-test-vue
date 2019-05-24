<template>
  <div class="selected-item__container">
    <div class="selected-item__wrapper" v-for="state in selectedStates" v-bind:key="state">
      <h4 class="selected-item__name">{{ state }}</h4>
      <button class="selected-item__del-button" @click="$emit('del-selected', state)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedItem",
  props: ["selectedStates"]
};
</script>

<style lang="scss" scoped>
  .selected-item {
    &__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &__wrapper {
      height: 25px;
      font-size: 12px;
      color: #8B8B8B;
      font-weight: lighter;
      border: 1px solid lightgrey;

      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: #E0DEE3;
      border-radius: 5px;
      margin: 2px;

      :focus {
        border: 1px solid blue;
      }
    }

    &__name {
      padding: 0 8px;
    }

    &__del-button {
      border: none;
      background-color: transparent;
      padding-right: 8px;
      color: #8B8B8B;

    }
  }
</style>