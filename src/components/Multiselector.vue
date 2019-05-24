<template>
  <div class="hello">
    <select 
    v-model="states"
    placeholder="Select a state:"
    multiple>
      <option disabled selected>Choose your state</option>
      <option
        v-for="state in states"
        :value="state"
        v-bind:key="state"
        @click="$emit('select-state', state)"
      >{{ state }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Multiselector",
  props: ["states"]
};
</script>

<style lang="scss" scoped>
    /* width */
  select ::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */
  select ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  /* Handle */
  select ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  select ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  select {
    border-radius: 5px;
    
  }
  option {
    height: 30px;
    width: 200px;
    padding: 8px;
    display: flex;
    align-items: center; 
  }
</style>
