<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import CodeEditor from "@/components/CodeEditor.vue";
import OnlyReadMD from "@/components/OnlyReadMD.vue";
import userStore from "@/store/userStore";
import {
  QuestionControllerService,
  QuestionSubmitControllerService,
  QuestionVO,
} from "../../generated";
import { Message } from "@arco-design/web-vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.query.id as unknown as number;
const visible = ref(false);
const question = ref({
  content: "",
  createTime: "",
  id: -1,
  judgeCase: [
    {
      input: "",
      output: "",
    },
  ],
  judgeConfig: {
    memoryLimit: "",
    stackLimit: "",
    timeLimit: "",
  },
  tags: [],
  title: "",
  updateTime: "",
} as unknown as QuestionVO);
const form = reactive({
  code: "fasdfas",
  language: "java",
  questionId: id,
  userId: userStore().user.id,
});
const responseContent = reactive({
  times: [] as Array<string>,
  memories: [] as Array<string>,
  messages: [] as Array<string>,
  // outputs: [] as Array<string>
});
const loadData = async () => {
  const res = await QuestionControllerService.getQuestionVoByIdUsingGet(id);
  question.value = res.data as QuestionVO;
};
onMounted(() => {
  loadData();
});
/*watchEffect(() => {
  form.questionId = props.record.id;
  question.title = props.record.title;
  question.content = props.record.content;
  question.judgeCase = props.record.judgeCase;
  question.judgeConfig = props.record.judgeConfig;
  question.tags = props.record.tags;
});*/

const onSubmit = async () => {
  let res = await QuestionSubmitControllerService.addQuestionSubmitUsingPost(
    form
  );
  if (res.code === 0) {
    Message.success("提交成功");
    var judgeInfo = res.data.judgeInfo;
    if (judgeInfo !== null) {
      responseContent.memories = judgeInfo.memories;
      responseContent.times = judgeInfo.times;
      responseContent.messages = judgeInfo.messages;
      visible.value = true;
    } else {
      alert("编译失败");
    }
  } else {
    alert("提交失败" + res.message);
  }
};
const changeCode = (code: string) => {
  form.code = code;
};
const handleOk = () => {
  visible.value = false;
};
</script>

<template>
  <a-layout>
    <a-layout-sider :resize-directions="['right']">
      <div class="sider">
        <h1>{{ question.title }}</h1>
        <a-space>
          <a-tag
            v-for="(tag, index) of question.tags"
            :key="index"
            color="green"
            >{{ tag }}
          </a-tag>
        </a-space>
        <OnlyReadMD :value="question.content"></OnlyReadMD>
        <h2>示例</h2>
        <a-list>
          <template #header> 示例一</template>
          <a-list-item>输入：{{ question.judgeCase[0].input }}</a-list-item>
          <a-list-item>输出：{{ question.judgeCase[0].output }}</a-list-item>
        </a-list>
        <h2>限制</h2>
        <a-list>
          <a-list-item
            >时间限制：{{ question.judgeConfig?.timeLimit }}ms
          </a-list-item>
          <a-list-item
            >内存限制：{{ question.judgeConfig?.memoryLimit }}kb
          </a-list-item>
          <a-list-item
            >堆栈限制：{{ question.judgeConfig?.stackLimit }}kb
          </a-list-item>
        </a-list>
      </div>
    </a-layout-sider>
    <a-layout-content>
      <div>
        <CodeEditor :changeCode="changeCode" :code="form.code" />
        <a-button style="float: right" type="primary" @click="onSubmit"
          >提交
        </a-button>
      </div></a-layout-content
    >
  </a-layout>
</template>

<style scoped>
:deep(.arco-layout-sider) {
  min-width: 25%;
  max-width: 60%;
  height: 600px;
}
.sider {
  margin-left: 20px;
}
</style>
