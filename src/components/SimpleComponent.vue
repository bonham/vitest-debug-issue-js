<template>
  <div>Hi {{ name }}</div>
  <div>Good</div>
</template>
<script setup>
import { ref } from 'vue'
const name = ref("Peter")
console.log("Nothing special")
</script>
<style>
.useless {
  color: green;
}
</style>