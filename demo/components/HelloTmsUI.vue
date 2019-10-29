<template>
  <div class="hello">
    <tms-login mode="static">
      <template v-slot:title>
        密码登录
      </template>
      <template v-slot:nickname>
        <el-input placeholder="用户名" v-model="user.uname" clearable></el-input>
      </template>
      <template v-slot:password>
        <el-input placeholder="密码" v-model="user.password" show-password></el-input>
      </template>
      <template v-slot:button>
        <el-button size="medium" type="primary" @click="submit(user)" class="login-btn">登录</el-button>
      </template>
    </tms-login>
    <!-- <tms-login mode="absolute" :display="{nickname:true,password:true}"></tms-login> -->
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { Login } from '../../lib'
import '../../lib/login/style'

Vue.use(ElementUI).use(Login)

export default {
  name: 'HelloTmsUI',
  data() {
		return {
			user: {}
		}
  },
  methods: {
    submit(userArg) {
      let userObj = JSON.stringify({name: userArg.uname, pwd: userArg.password})
      alert(userObj)
    }
  }
}
</script>

<style lang="less">
.tms-login {
  width: 300px;
  height: 400px;
  margin: 0 auto;
}
</style>
