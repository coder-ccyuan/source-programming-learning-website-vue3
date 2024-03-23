<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import APIMessage from "@/views/api/APIMessage.vue";
import {InterfaceInformationControllerService} from "../../../api";

const queryP = reactive({
  method: "",
  name: "",
  url: "",
  id: 1,
  status: null,
});
/*let data = reactive({
  createTime: "",
  id: -1,
  method: "",
  name: "",
  paramName: "",
  requestHead: "",
  responseHead: "",
  status: 0,
  updateTime: "",
  url: "",
  userId: "",
});*/
const data = ref([]);
const loadData = async () => {
  let res = await InterfaceInformationControllerService.queryUsingGet(queryP);
  data.value = res.data;
};
/**
 * 在线调用参数
 */
onMounted(() => {
  loadData();
});
</script>

<template>
  <div id="api">
    <a-divider/>
    <a-affix :offsetTop="80" class="anchor">
      <a-anchor>
        <a-anchor-link
            v-for="(item, index) in data"
            :key="index"
            :href="'#' + item.id"
        >
          {{ item.name }}
        </a-anchor-link>
      </a-anchor>
    </a-affix>
    <a-collapse :default-active-key="[0]" accordion>
      <a-collapse-item
          v-for="(item, index) in data"
          :id="item.id"
          :key="index"
          :header="item.name"
      >
        <APIMessage :item="item"></APIMessage>
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<style scoped>
#api {
  max-width: 1200px;
  margin: 0 auto;
}

.anchor {
  float: left;
  max-width: max-content;
}
</style>
