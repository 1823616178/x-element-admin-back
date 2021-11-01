<template>
  <div>
    <el-button v-if="type==='default'">
      <slot></slot>
    </el-button>
    <el-button v-else :type="type">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    type: {
      default: "default"
    }
  }
}
</script>

<style scoped lang="scss">

</style>
