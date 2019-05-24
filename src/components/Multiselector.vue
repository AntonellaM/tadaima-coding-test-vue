<template>
  <div class="hello">
    <h1>Countries</h1>
    <select v-model="selectedStates" multiple>
      <option
        v-for="state in states" :value="state" :name="state"
        v-bind:key="state"
        @click="$emit('select-state', state)"
      >{{ state }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Multiselector",
  props: ["states", "selectedStates"],
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
