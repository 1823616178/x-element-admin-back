<template>
  <div class="container_line">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待办事项" name="first">
        <div class="container_line_tabs_box">
          <el-radio-group v-model="radio1">
            <el-radio-button label="入职确认"></el-radio-button>
            <el-radio-button label="入职审核"></el-radio-button>
            <el-radio-button label="离职办理"></el-radio-button>
            <el-radio-button label="工伤审核"></el-radio-button>
          </el-radio-group>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已办事项" name="second">
        <div class="container_line_tabs_box">
          <el-radio-group v-model="radio1">
            <el-radio-button label="入职确认"></el-radio-button>
            <el-radio-button label="Washington"></el-radio-button>
            <el-radio-button label="Los Angeles"></el-radio-button>
            <el-radio-button label="Chicago"></el-radio-button>
          </el-radio-group>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>


</template>

<script>
import {reactive, toRef, toRefs, ref} from "vue";

export default {
  setup() {
    const state = {
      activeName: ref("first"),
      radio1: ref("入职确认")
    }
    const handleClick = (tab, event) => {
      state.activeName = tab
    }
    return {
      handleClick,
      ...state
    }
  },
  name: "index"
}
</script>

<style lang="scss" scoped>
.container_line {
  padding: 0 30px;
  background: #FFFFFF;
  box-shadow: 2px 1px 9px 0 rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
}

.container_line_tabs_box {
  padding: 30px 0;
}
</style>
<style>
.container_line .el-tabs__item {
  height: 63px;
  line-height: 63px;
  padding: 0 40px;
  font-size: 16px;
  box-sizing: border-box;
}

.container_line .el-tabs__active-bar {
  height: 4px;
}

</style>
