<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import userStore from "@/store/userStore";

const title = ref("个人信息");
const user = userStore().user;
let updata = reactive({
  id: "",
  userName: "",
  userAvatar: "",
  userProfile: "",
  userRole: "",
  createTime: "",
  updateTime: "",
  accessKey: "",
  secretKey: "",
});
const data = [
  {
    label: "名字",
    value: user.userName,
    span: 3,
  },
  {
    label: "权限",
    value: user.userRole,
  },
  {
    label: "简介",
    value: user.userProfile,
  },
  {
    label: "创建时间",
    value: user.createTime,
  },
  {
    label: "access-key",
    value: user.accessKey,
  },
  {
    label: "secret-key",
    value: user.secretKey,
  },
];
// const loadData = async () => {};
onMounted(() => {
  // loadData();
});
</script>
<template>
  <a-descriptions
    :column="1"
    :data="data"
    :size="'large'"
    :title="title"
    style="margin-top: 20px"
  />
</template>
<style scoped></style>
