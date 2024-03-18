import { RouteRecordRaw } from "vue-router";
import QuestionSet from "@/views/QuestionSet.vue";
import UserCenter from "@/views/user/UserCenter.vue";
import ManageQuestion from "@/views/ManageQuestion.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AddQuestion from "@/views/AddQuestion.vue";
import DoQuestionView from "@/views/DoQuestionView.vue";
import UserMessage from "@/views/user/UserMessage.vue";
import SubmitRecord from "@/views/SubmitRecord.vue";
import UserSubmitRecord from "@/views/user/UserSubmitRecord.vue";
import APIView from "@/views/api/APIView.vue";
import APIManage from "@/views/api/APIManage.vue";
import APIAddView from "@/views/api/APIAddView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    name: "题集",
    path: "/",
    component: QuestionSet,
    meta: {
      isLogin: false,
      isAdmin: false,
    },
  },
  {
    name: "API开放平台",
    path: "/api",
    component: APIView,
    meta: {
      isLogin: false,
      isAdmin: false,
    },
  },
  {
    name: "API添加",
    path: "/apiAdd",
    component: APIAddView,
    meta: {
      isLogin: true,
      isAdmin: true,
    },
  },
  {
    name: "API管理",
    path: "/apiManage",
    component: APIManage,
    meta: {
      isLogin: true,
      isAdmin: true,
    },
  },
  {
    name: "做题",
    path: "/doQuestion",
    component: DoQuestionView,
    meta: {
      isLogin: false,
      isAdmin: false,
      isHide: true,
    },
  },
  {
    name: "用户中心",
    path: "/user",
    component: UserCenter,
    children: [
      {
        name: "个人信息",
        path: "/user/message",
        component: UserMessage,
      },
      {
        name: "个人提交记录",
        path: "/user/submitRecord",
        component: UserSubmitRecord,
      },
    ],
    meta: {
      isLogin: true,
      isAdmin: false,
    },
  },
  {
    name: "登录",
    path: "/login",
    component: LoginView,
    meta: {
      isLogin: false,
      isAdmin: false,
      isHide: true,
    },
  },
  {
    name: "注册",
    path: "/register",
    component: RegisterView,
    meta: {
      isLogin: false,
      isAdmin: false,
      isHide: true,
    },
  },
  {
    name: "添加题目",
    path: "/aq",
    component: AddQuestion,
    meta: {
      isLogin: true,
      isAdmin: true,
    },
  },
  {
    name: "管理题目",
    path: "/mq",
    component: ManageQuestion,
    meta: {
      isLogin: true,
      isAdmin: true,
    },
  },
  {
    name: "提交记录",
    path: "/subRecord",
    component: SubmitRecord,
    meta: {
      isLogin: false,
      isAdmin: false,
    },
  },
];
