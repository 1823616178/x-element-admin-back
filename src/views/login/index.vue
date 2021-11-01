<template>
  <div class="login-page">
    <div class="main-login">
      <div class="left_img">
        <img src="@/assets/login/login_icon.png"/>
      </div>
      <div class="form">
        <div class="form_title">
          <p>政府编外人力资源服务综合管理平台</p>
        </div>
        <div class="form-item">
          <el-form v-model="loginForm.username" :onsubmit="false">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username"
                        icon="user1"
                        name="username"
                        placeholder="用户名">
                <img slot="prefix" src="@/assets/login/zhanghao.png"/>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password"
                        name="password"
                        icon="password1"
                        type="password"
                        placeholder="密码">
                <img slot="prefix" src="@/assets/login/mima.png"/>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="form_item_ipu">
                <el-input v-model="loginForm.code"
                          name="code"
                          icon="user1"
                          placeholder="验证码"
                          @keyup.enter.native="login"/>
              </div>

              <div class="form_item_img">
                <img :src="codeUrl" @click="getCode" class="login-code-img"/>
              </div>
            </el-form-item>
            <el-form-item style="margin-bottom: 12px">
              <div class="submit_but" @keyup.enter="login" @click="login()" style="cursor: pointer;">
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
              </div>
            </el-form-item>
          </el-form>
          <div class="register">忘记密码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCodeImg} from '@/api/app'
import {useStore} from 'vuex'
import {reactive, onMounted, toRefs} from "vue";
import {useRoute, useRouter} from 'vue-router'

export default {
  setup() {
    const state = reactive({
      codeUrl: "",
      activeTab: 1,
      loginForm: {
        username: 'ygdw',
        password: 'admin123',
        uuid: "",
        code: ""
      },
      loading: false
    })
    const router = useRouter()
    const store = useStore()
    const login = () => {
      state.loading = true
      store.dispatch('login', state.loginForm).then(() => {
        state.loading = false
        console.log('yes')
        router.push({path: '/'})
      }).catch(() => {
        getCode()
        state.loading = false
      })
    }
    const getCode = () => {
      getCodeImg().then(res => {
        state.codeUrl = "data:image/gif;base64," + res.img;
        state.loginForm.uuid = res.uuid;
      });
    }
    onMounted(() => {
      getCode()
    })
    return {
      ...toRefs(state),
      login,
      getCode
    }
  },
}
</script>

<style lang="scss">
@import "./style/index";

.el-form-item {
  margin-bottom: 16px;
}

.el-input__prefix {
  left: 16px;
  top: 2px;
}

.el-input--prefix .el-input__inner {
  padding-left: 50px;
}

.el-input {
  input {
    height: 45px;
    line-height: 45px;
  }
}

</style>
