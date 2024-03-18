<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";
import {
  InterfaceInformationControllerService,
  InterfaceInvokeTestRequest,
} from "../../../api";
import { Message } from "@arco-design/web-vue";

/**
 * 在线调用参数
 */
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
</script>

<template>
  <a-row class="row">
    <a-col :span="2">
      <a-button type="primary" aria-readonly="true">Name</a-button>
    </a-col>
    <a-col :span="20">
      <a-input :readonly="true" :default-value="props.item.name" />
    </a-col>
  </a-row>
  <a-row class="row">
    <a-col :span="2">
      <a-button type="primary" aria-readonly="true">URL</a-button>
    </a-col>
    <a-col :span="20">
      <a-input :readonly="true" :default-value="props.item.url" />
    </a-col>
  </a-row>
  <a-row class="row">
    <a-col :span="2">
      <a-button type="primary" aria-readonly="true">Method</a-button>
    </a-col>
    <a-col :span="20">
      <a-input :readonly="true" :default-value="props.item.method" />
    </a-col>
  </a-row>
  <a-row class="row">
    <a-button type="outline">API功能介绍</a-button>
    <a-card :style="{ width: '1000px' }">
      {{ props.item.introduce }}
    </a-card>
  </a-row>
  <a-row class="row">
    <a-button type="outline">请求参数</a-button>
    <a-card :style="{ width: '1000px' }">
      {{ props.item.requestHead }}
    </a-card>
  </a-row>
  <a-row class="row">
    <a-button type="outline">在线测试</a-button>
    <a-textarea
      :default-value="props.item.requestHead"
      v-model="invokeP.requestParams"
      :auto-size="{
        minRows: 5,
        maxRows: 8,
      }"
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
    <a-card :style="{ width: '1000px' }">
      {{ props.item.responseHead }}
    </a-card>
  </a-row>
  <a-row class="row">
    <a-button type="outline">maven SDK</a-button>
    <a-card :style="{ width: '1000px' }">
      {{ props.item.maven }}
    </a-card>
  </a-row>
  <a-row class="row">
    <a-button type="outline">jar SDK</a-button>
  </a-row>
  <a-link
    :href="
      'http://localhost:8092/interfaceInfo/downloadSDK?id=' + props.item.id
    "
    icon
    >下载该API的sdk jar包</a-link
  >
</template>

<style scoped>
.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
