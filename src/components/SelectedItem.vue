<template>
  <div>
    <h4>{{state}}</h4>
    <button @click="$emit('del-selected', selectedState)">x</button>
  </div>
</template>

<script>
export default {
  name: "SelectedItem",
  props: ["states", "selectedStates"]
}
</script>

