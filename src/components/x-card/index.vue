<template>
  <div class="container_line" :style="'width:'+width">
    <div class="container_line_group" :style="center===true?'justify-content: center':'justify-content: start'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    width: {
      default: '100%'
    },
    center: {
      default: false
    }
  },

}
</script>

<style lang="scss" scoped>
.container_line {
  padding: 20px 30px;
  background: #FFFFFF;
  box-shadow: 2px 1px 9px 0px rgba(0, 0, 0, 0.16);

  .container_line_group {
    display: flex;
    align-items: center;

    .container_line_group_title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 16px;
      text-align: left;
    }

    .container_line_group_select {
      margin-left: 17px;
    }
  }
}
</style>
