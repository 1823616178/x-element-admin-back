<template>
  <div class="hello">
    <x-button type="success"></x-button>
  </div>
</template>

<script>
import {toRefs} from "vue";

export default {
  setup() {
    name = "show_test"
    const state = {

    }
    return {
      ...toRefs(state)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
