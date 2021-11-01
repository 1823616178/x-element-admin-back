<template>
  <div class="container_nav">
    <div class="container_nav_icon" @click="$router.push({name:'Home'})">
      <img src="@/assets/logo.png"/>
      <div class="usertit">
        您好，欢迎来到政府编外人力资源服务综合管理系统
      </div>
    </div>
    <div class="container_nav_rit">
      <div class="container_nav_pt">
        <div class="user_icon">
          <img src="@/assets/manage.jpg"/>
        </div>
        <div class="user_name">{{ user.nickName ? user.nickName : '' }}</div>
      </div>

      <div class="container_nav_p" @click="loginout()">
        <div class="quit_login">
          退出登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      user: store.getters.user
    })
    const loginout = () => {
      router.dispatch('logout')
    }
    return {
      ...toRefs(state),
      loginout
    }
  },
}
</script>

<style lang="scss" scoped>
.container_nav {
  min-width: 1200px;
  height: 68px;
  line-height: 68px;
  margin: 0 auto;
  padding: 0 0 0 28px;
  background: white;
  box-shadow: -6px 2px 1px 1px #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container_nav_icon {
    display: flex;
    cursor: pointer;
    align-items: center;

    img {
      width: 212px;
      height: 33px;
    }

    .usertit {
      display: inline-block;
      font-size: 16px;
      font-weight: 400;
      height: 25px;
      margin-left: 58px;
      line-height: 25px;
    }
  }

  .container_nav_rit {
    //width: 132px;
    position: absolute;
    right: 36px;
    top: 0;
    cursor: pointer;

    .user_icon {
      height: 40px;
      width: 40px;
      display: inline-block;
      vertical-align: middle;

      img {
        display: inline-block;
        vertical-align: 1px;
        border-radius: 32px;
        height: 100%;
        width: 100%;
      }
    }

    .user_name {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      padding-left: 20px;
    }

    .container_nav_p {
      background: white;
      display: none;
      position: absolute;
      width: 128px;
      z-index: 9;

      .quit_login {
        //width: 132px;
        height: 48px;
        text-align: center;
        line-height: 48px;
      }
    }

    &:hover {
      .container_nav_p {
        display: block;
      }
    }
  }
}
</style>
