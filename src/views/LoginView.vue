<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { UserControllerService, UserLoginRequest } from "../../userApi";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);
const router = useRouter();
const onHandleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    await router.push("/");
    router.go(0);
  } else {
    alert("账号或密码错误");
  }
};
</script>

<template>
  <div id="loginView">
    <a-image
      :preview="false"
      description="source"
      height="200px"
      src="https://th.bing.com/th/id/OIG1.qQYQn6EGN65jlfKRAlsp?pid=ImgGn"
    ></a-image>
    <h1>用户登录</h1>
    <a-form :model="form" :style="{ width: '550px' }" @submit="onHandleSubmit">
      <a-form-item field="userAccount" label="账户">
        <a-input v-model="form.userAccount" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input
          v-model="form.userPassword"
          placeholder="请输入密码"
          type="password"
        />
      </a-form-item>
      <a-row class="grid-demo">
        <a-col :span="14">
          <a-button html-type="submit" type="primary">登录</a-button>
        </a-col>
        <a-col :span="10">
          <a-button type="outline">
            <router-link to="/register">注册</router-link>
          </a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<style scoped>
#loginView {
  padding: 30px;
  max-width: 600px;
  margin: 30px auto;
  text-align: center;
}
</style>
