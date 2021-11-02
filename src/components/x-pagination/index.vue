<template>
  <div class="pagin-box">
    <x-card :center="true">
      <el-pagination
          v-model:currentPage="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </x-card>
  </div>
</template>

<script>
import {reactive, ref, toRef} from "vue";

export default {
  name: "index",
  setup() {
    const handleSizeChange = (val) => {
    }
    const handleCurrentChange = (val) => {
      console.log(currentPage4)

    }
    return {
      handleSizeChange,
      handleCurrentChange,
      currentPage4: ref(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagin-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
