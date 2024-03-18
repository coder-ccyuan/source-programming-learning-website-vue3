<script setup lang="ts">
import { reactive } from "vue";
import { InterfaceInformationControllerService } from "../../../api";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";

/**
 * 在线调用参数
 */
const router = useRouter();
// region 编辑模块
let data = reactive({
  method: "",
  name: "",
  paramName: "",
  requestHead: "",
  responseHead: "",
  url: "",
  introduce: "",
  maven: "",
});
const onAdd = async () => {
  let res = await InterfaceInformationControllerService.addUsingPost(data);
  if (res.code === 20000) {
    Message.success("添加成功");
    await router.push("/api");
    router.go(0);
  } else {
    Message.error("添加失败");
    alert(res.message);
  }
};
// endregion
</script>

<template>
  <div id="apiAdd">
    <a-divider />
    <a-row class="row">
      <a-col :span="2">
        <a-button type="primary">api名称</a-button>
      </a-col>
      <a-col :span="20">
        <a-input v-model="data.name" />
      </a-col>
    </a-row>
    <a-row class="row">
      <a-col :span="2">
        <a-button type="primary">URL</a-button>
      </a-col>
      <a-col :span="20">
        <a-input v-model="data.url" />
      </a-col>
    </a-row>
    <a-row class="row">
      <a-col :span="2">
        <a-button type="primary" aria-readonly="true">Method</a-button>
      </a-col>
      <a-col :span="20">
        <a-input v-model="data.method" />
      </a-col>
    </a-row>
    <a-row class="row">
      <a-button type="outline">API功能介绍</a-button>
      <a-textarea
        v-model="data.introduce"
        :auto-size="{
          minRows: 5,
          maxRows: 8,
        }"
        style="margin-top: 20px"
      />
    </a-row>
    <a-row class="row">
      <a-button type="outline">请求参数</a-button>
      <a-textarea
        v-model="data.requestHead"
        :auto-size="{
          minRows: 5,
          maxRows: 8,
        }"
        style="margin-top: 20px"
      />
    </a-row>
    <a-row class="row">
      <a-button type="outline">响应参数</a-button>
      <a-textarea
        v-model="data.responseHead"
        :auto-size="{
          minRows: 5,
          maxRows: 8,
        }"
        style="margin-top: 20px"
      />
    </a-row>
    <a-row class="row">
      <a-button type="outline">maven SDK</a-button>
      <a-textarea
        v-model="data.maven"
        :auto-size="{
          minRows: 5,
          maxRows: 8,
        }"
        style="margin-top: 20px"
      />
    </a-row>
    <a-row class="row">
      <a-button type="outline">上传SDK</a-button>
      <a-upload draggable action="/" />
    </a-row>
    <a-row class="row">
      <a-button
        type="primary"
        status="success"
        style="margin: 0 10px"
        @click="onAdd"
        >添加</a-button
      >
    </a-row>
  </div>
</template>

<style scoped>
.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
#apiAdd {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
