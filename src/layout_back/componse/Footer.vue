<template>
  <div class="con_footer">
    <div class="cont_body">
      <div class="foot_yqlj">
        <p>关于我们</p>
        <p>|</p>
        <p>联系方式</p>
      </div>
      <div class="foot_yqlj">
        <p>津ICP备19008951号-2 北方人才网 版权所有 </p>
      </div>
      <div class="foot_yqlj">
        <p>津公网安备 12010302001578号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foots"
}
</script>

<style lang="scss" scoped>
.con_footer {
  //background: url("~@/assets/footer_bg.png");
  padding: 20px 0;
  color: #666666;
  background: #FFFFFF;

  .cont_body {
    width: 1200px;
    margin: 0 auto;

    .foot_yqlj {
      width: 100%;
      overflow: hidden;
      text-align: center;
      height: 25px;
      line-height: 25px;

      span {
        font-size: 12px;
      }

      p {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        margin: 0 10px;

        &:hover {
          color: #0099ff;
          text-decoration: underline;
        }
      }
    }

    .foot_lxwm {

    }

    .foot_baxx {

    }
  }
}
</style>
