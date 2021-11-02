<template>
  <div class="table_select">
    <div class="select_name" v-if="name">{{name}}</div>
    <el-select v-model="value" placeholder="Select">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "index",
  props: {
    name: {
      default: ""
    },
    options: {
      default: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]
    },
    value: {
      default: "Option1"
    },
  },
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
