<template>
  <div class="container_sidder">
    <el-menu
        active-text-color="rgba(80, 111, 220, 1)"
        :default-openeds="openeds"
        :text-color="'rgba(155, 177, 201, 1)'"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      <div class="menu_body">
        <div style="margin: 10px 0">
          <el-menu-item index="index"
                        style="line-height: 40px !important;height: 40px !important;padding-left:35px !important;"
                        @click="toPage('Home')">
            <div class="firstTitle">
              <i style="margin-right: 16px" class="el-icon-s-home"></i>
              <span class="tit_bst">首页</span>
            </div>
          </el-menu-item>
        </div>
        <div style="margin: 10px 0" v-for="(item,index) in rule" :key="index">
          <el-menu-item :index="item.name" v-if="item.hasOwnProperty('children') == false"
                        style="line-height: 40px !important;height: 40px !important;padding-left:35px !important;"
                        @click="toPage(item.name)">
            <div class="firstTitle">
              <i style="margin-right: 16px" :class="item.meta.icon"></i>
              <div class="tit_bst">{{ item.meta.title }}</div>
            </div>
          </el-menu-item>
          <el-sub-menu :index="item.name" v-else>
            <template slot="title">
              <i style="margin-right: 16px !important;" :class="item.meta.icon"></i>
              <div class="tit_bst">{{ item.meta.title }}</div>
            </template>
            <el-menu-item @click="toPage(e.name)" v-for="(e,i) in item.children" v-if="roles.indexOf(e.meta.role) > -1"
                          :key="i" :index="e.name">
              {{ e.meta.title }}
            </el-menu-item>
          </el-sub-menu>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Siderbar",
  data() {
    return {
      openeds: [],
      rule: this.$store.getters.rule,
      roles: this.$store.getters.roles
    }
  },
  created() {
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    },
    toPage(path) {
      this.$router.push({name: path})
    }
  }
}
</script>

<style lang="scss" scoped>
.container_sidder {
  width: 230px;
  padding: 20px 0 0 0;
  box-shadow: 0 8px 4px -5px rgba(0, 0, 0, 0.03) inset;
  background: white;
  min-height: calc(100vh - 80px);
}

.menu_body {
  width: 230px;
  margin: 0 auto;
}

.firstTitle {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.tit_bst {
  display: inline-block;
  vertical-align: middle;
  //width: 100px;
  font-size: 16px;
}

</style>
