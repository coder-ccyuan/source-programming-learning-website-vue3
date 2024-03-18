<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { UserControllerService, UserRegisterRequest } from "../../userApi";

const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserRegisterRequest);
const router = useRouter();
const onHandleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    await router.push("/login");
  } else {
    alert("注册失败");
  }
};
</script>

<template>
  <div id="loginView">
    <h1>用户注册</h1>
    <a-form :model="form" :style="{ width: '600px' }" @submit="onHandleSubmit">
      <a-form-item field="userAccount" label="用户账号">
        <a-input v-model="form.userAccount" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item field="userPassword" label="用户密码">
        <a-input
          v-model="form.userPassword"
          placeholder="请输入密码"
          type="password"
        />
      </a-form-item>
      <a-form-item field="checkPassword" label="确认密码">
        <a-input
          v-model="form.checkPassword"
          placeholder="请再次输入密码"
          type="password"
        />
      </a-form-item>
      <a-row class="grid-demo">
        <a-col :span="14">
          <a-button html-type="submit" type="primary">注册</a-button>
        </a-col>
        <a-col :span="10">
          <a-button type="outline">
            <router-link to="/login">登录</router-link>
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
