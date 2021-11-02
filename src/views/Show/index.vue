<template>
  <div class="container">
    <div class="container_top_banner">
      <div class="container_top_banner_title">派遣系统UI视觉及交互规范</div>
      <div class="container_top_banner_detail">本设计规范用于编外派遣系统项目/web端</div>
    </div>
    <div class="container_border_color">
      <div class="container_top_banner_title-2">
        <div class="title_let"></div>
        <div class="title_rit">
          标准用色
        </div>
      </div>
      <div class="container_top_banner_main_color">
        <div class="container_top_banner_color_line">
          <div class="color_title">主要颜色</div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #506FDC"></div>
            <div class="color_title_circle_font">#506FDC</div>
            <div class="color_detail">主色调（用于header、主要性文字、icon和button）</div>
          </div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #E6E6E6"></div>
            <div class="color_title_circle_font">#E6E6E6</div>
            <div class="color_detail">主体背景色</div>
          </div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #E6E6E6"></div>
            <div class="color_title_circle_font">#E6E6E6</div>
            <div class="color_detail">主体线条</div>
          </div>
        </div>
        <div class="container_top_banner_color_line">
          <div class="color_title">次要颜色</div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #FB4444"></div>
            <div class="color_title_circle_font">#FB4444</div>
            <div class="color_detail">提示辅助色（用于提示、警告、图表配色）</div>
          </div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #FF9A26"></div>
            <div class="color_title_circle_font">#FF9A26</div>
            <div class="color_detail">提示辅助色（用于提示、等待、图表配色）</div>
          </div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #67C23A"></div>
            <div class="color_title_circle_font">#67C23A</div>
            <div class="color_detail">提示辅助色（用于提示、成功、图表配色）</div>
          </div>
        </div>
        <div class="container_top_banner_color_line">
          <div class="color_title">文字颜色</div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #303133"></div>
            <div class="color_title_circle_font">#303133</div>
            <div class="color_detail">主要文字（用于一级文字信息、展示主要内容）</div>
          </div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #606266"></div>
            <div class="color_title_circle_font">#606266</div>
            <div class="color_detail">常规文字（用于二级文字信息、内容信息、基础文字）</div>
          </div>
          <div class="color_title_group_one">
            <div class="color_title_circle" style="background: #909399"></div>
            <div class="color_title_circle_font">#909399</div>
            <div class="color_detail">说明文字（用于时间、辅助说明、未点亮文字）</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container_border_font">
      <div class="container_top_banner_title-2">
        <div class="title_let"></div>
        <div class="title_rit">
          标准文字
        </div>
      </div>
      <div class="container_top_banner_group">
        <div class="container_top_banner_font_test">
          <div class="font_title_size">字号：16px</div>
          <div class="font_title_size_detail">导航文字、顶部菜单栏、一级标题</div>
        </div>
        <div class="container_top_banner_font_test">
          <div class="font_title_size" style="font-size: 14px">字号：14px</div>
          <div class="font_title_size_detail">主文字、正文、重要内容文字</div>
        </div>
        <div class="container_top_banner_font_test">
          <div class="font_title_size" style="font-size: 12px">字号：12px</div>
          <div class="font_title_size_detail">特殊字符、小字说明</div>
        </div>
      </div>
    </div>
    <div class="container_flex"></div>
    <div class="container_style">
      <div class="container_top_banner_title-2">
        <div class="title_let" style="background: #FF9A26"></div>
        <div class="title_rit" style="color: #FF9A26">
          内容导航栏样式
        </div>
      </div>
      <div class="container_top_banner_line_box">
        <div class="line_one_t">单行筛选</div>
        <x-card>
          <div style="width: 50px">小鸟</div>
          <el-input style="width: 300px;margin-right:20px"></el-input>
          <div style="width: 50px">小鸟</div>
          <el-input style="width: 300px;margin-right:20px"></el-input>
          <div style="width: 50px">小鸟</div>
          <el-input style="width: 300px;margin-right:20px"></el-input>
        </x-card>
      </div>
      <div class="container_top_banner_line_box">
        <div class="line_one_t">双行筛选</div>
        <x-tabs style="margin-top: 20px;width:100%"></x-tabs>
      </div>
    </div>
    <div class="container_style">
      <div class="container_top_banner_title-2">
        <div class="title_let" style="background: #E02121"></div>
        <div class="title_rit" style="color: #E02121">
          选择下拉列表
        </div>
      </div>
      <div class="container_top_banner_body">
        <x-select name="汉人"></x-select>
      </div>
    </div>
    <div class="container_style">
      <div class="container_top_banner_title-2">
        <div class="title_let" style="background: #E02121"></div>
        <div class="title_rit" style="color: #E02121">
          输入框文本
        </div>
      </div>
      <div class="container_top_banner_body">
        <div style="width: 250px">
          <x-input name="汉人"></x-input>
        </div>
      </div>
    </div>
    <div class="container_style">
      <div class="container_top_banner_title-2">
        <div class="title_let" style="background: #FF9A26"></div>
        <div class="title_rit" style="color: #FF9A26">
          页码展示
        </div>
      </div>
      <div class="container_top_banner_body">
        <x-pagination></x-pagination>
      </div>
    </div>
    <div class="container_style">
      <div class="container_top_banner_title-2">
        <div class="title_let" style="background: #4F8FFF"></div>
        <div class="title_rit" style="color: #4F8FFF">
          弹窗样式
        </div>
      </div>
      <div class="container_top_banner_body">
        <x-pagination></x-pagination>
      </div>
    </div>
    <div class="container_button"></div>
    <div class="container_hint"></div>
    <div class="container_table"></div>
    <div class="container_icon"></div>
  </div>
</template>

<script>
import {toRefs} from "vue";

export default {
  setup() {
    name = 'show'
    const state = {}
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.container_top_banner_title-2 {
  .title_let {
    display: inline-block;
    vertical-align: middle;
    height: 15px;
    width: 6px;
    background: #506FDC;
  }

  .title_rit {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    color: #506FDC;
    font-weight: bold;
    margin-left: 8px;
  }
}

.container_top_banner {
  width: 100%;
  height: 242px;
  background-image: url("~@/assets/show/show_top.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .container_top_banner_title {
    color: #FFFFFF;
    font-size: 52px;
    font-weight: 600;
    height: 73px;
    line-height: 73px;
    overflow: hidden;
  }

  .container_top_banner_detail {
    font-size: 25px;
    color: #FFFFFF;
    opacity: 0.68;
    height: 36px;
    line-height: 36px;
    margin-top: 15px;
  }
}

.container_border_color {
  padding: 54px 52px;
  overflow: hidden;

  .container_top_banner_main_color {
    .container_top_banner_color_line {
      display: flex;
      align-items: center;
      margin-top: 28px;

      &:first-child {
        margin-top: 41px;
      }

      .color_title {
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
      }

      .color_title_group_one {
        display: flex;
        align-items: center;
        min-width: 560px;
        overflow: hidden;

        .color_title_circle {
          height: 48px;
          width: 48px;
          border-radius: 50%;
          background: #506FDC;
          margin-left: 10px;
        }

        .color_title_circle_font {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.85);
          margin-left: 10px;
        }

        .color_detail {
          font-size: 16px;
          color: #909399;
          margin-left: 15px;
        }
      }


    }

  }
}

.container_border_font {
  padding: 18px 52px;

  .container_top_banner_group {
    margin-top: 8px;
    overflow: hidden;

    .container_top_banner_font_test {
      display: flex;
      align-items: center;
      margin-top: 20px;

      .font_title_size {
        font-size: 16px;
        height: 22px;
        width: 120px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.85);
      }

      .font_title_size_detail {
        color: #909399;
        font-size: 16px;
      }
    }
  }
}

.container_style {
  padding: 28px 52px;

  .container_top_banner_line_box {
    display: flex;
    align-items: center;
    margin-top: 55px;

    .line_one_t {
      min-width: 100px;
      margin-right: 28px;
    }
  }

  .container_top_banner_body {
    margin-top: 20px;
  }
}
</style>
