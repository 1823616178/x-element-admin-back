<template>
  <div class="table_select">
    <div class="select_name" v-if="name">{{ name }}</div>
    <el-input  placeholder="请输入需要的文本内容" v-model="value"></el-input>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    value: {
      default: ''
    },
    name: {
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.table_select {
  display: flex;
  align-items: center;

  .select_name {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
    margin-right: 20px;
    white-space: nowrap;
  }
}
</style>
