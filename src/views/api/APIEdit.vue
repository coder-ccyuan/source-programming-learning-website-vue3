<script lang="ts" setup>
import { defineProps, reactive, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import {
  InterfaceInformationControllerService,
  InterfaceInvokeTestRequest,
} from "../../../interfaceApi";

/**
 * 在线调用参数
 */
const router = useRouter();
const props = defineProps(["item"]);
const invokeP = reactive({
  id: props.item.id,
  method: props.item.method,
  name: props.item.name,
  paramName: props.item.paramName,
  requestParams: props.item.requestHead,
  url: props.item.url,
}) as unknown as InterfaceInvokeTestRequest;
//响应结果
const response = ref("");
const onlineInvoke = async () => {
  let res = await InterfaceInformationControllerService.invokeUsingPost(
    invokeP
  );
  if (res.code === 20000) {
    Message.success("调用成功");
    response.value = res.data;
  } else {
    Message.error("调用失败");
  }
};
// region 编辑模块
let data = reactive({
  createTime: props.item.createTime,
  id: props.item.id,
  method: props.item.method,
  name: props.item.name,
  paramName: props.item.paramName,
  introduce: props.item.introduce,
  requestHead: props.item.requestHead,
  responseHead: props.item.responseHead,
  status: props.item.status,
  url: props.item.url,
  userId: props.item.userId,
  maven: props.item.maven,
  sdkURL: props.item.sdkURL,
});
const onSava = async () => {
  let res = await InterfaceInformationControllerService.updateUsingPost(data);
  if (res.code === 20000) {
    Message.success("保存成功");
  } else {
    Message.error("保存失败");
  }
};
//
const online = async () => {
  let res = await InterfaceInformationControllerService.onlineUsingPost(data);
  if (res.code === 20000) {
    Message.success("上线成功");
  } else {
    Message.error("上线失败");
    alert(res.message);
  }
};
const offline = async () => {
  let res = await InterfaceInformationControllerService.offlineUsingPost(data);
  if (res.code === 20000) {
    Message.success("下线成功");
  } else {
    Message.error("下线失败");
    alert(res.message);
  }
};
const onDelete = async () => {
  let res = await InterfaceInformationControllerService.deleteUsingPost(data);
  if (res.code === 20000) {
    Message.success("删除成功");
    router.go(0);
  } else {
    Message.error("删除失败");
    alert(res.message);
  }
};
// endregion
</script>

<template>
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
      <a-button aria-readonly="true" type="primary">Method</a-button>
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
    <a-button type="outline">在线测试</a-button>
    <a-textarea
      v-model="invokeP.requestParams"
      :auto-size="{
        minRows: 5,
        maxRows: 8,
      }"
      :default-value="props.item.requestHead"
      style="margin-top: 20px"
    />
    <a-button type="text" @click="onlineInvoke">
      <icon-send />
      测试
    </a-button>
  </a-row>
  <a-row class="row">
    <a-card :style="{ width: '1000px' }" title="响应">
      {{ response }}
    </a-card>
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
    <a-upload
      :data="{
        id: data.id,
      }"
      :with-credentials="true"
      action="
http://localhost:8101/api/API/interfaceInfo/uploadSDK"
      draggable
    />
  </a-row>
  <a-row class="row">
    <a-button
      status="success"
      style="margin: 0 10px"
      type="primary"
      @click="onSava"
      >保存
    </a-button>
    <a-button status="success" style="margin: 0 10px" @click="online"
      >上线
    </a-button>
    <a-button status="danger" style="margin: 0 10px" @click="offline"
      >下线
    </a-button>
    <a-button
      status="danger"
      style="margin: 0 10px"
      type="primary"
      @click="onDelete"
      >删除
    </a-button>
  </a-row>
</template>

<style scoped>
.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
