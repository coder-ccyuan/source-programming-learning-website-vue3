<template>
  <div class="menu-demo">
    <a-layout>
      <a-layout-sider :style="{ marginRight: '20px;' }">
        <a-menu
          :style="{ width: '200px', height: '550px' }"
          @menuItemClick="menuItemClick"
        >
          <template #icon>
            <icon-apps></icon-apps>
          </template>
          <a-menu-item v-for="itme in visibleRoutes" :key="itme.path">
            {{ itme.name }}
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <div class="content">
          <h2>用户中心</h2>
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";

const router = useRouter();
const visibleRoutes = routes.filter((item, index) => {
  if (item.path === "/user") {
    return true;
  } else {
    return false;
  }
})[0].children;
const menuItemClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  padding: 40px;
  background-color: var(--color-neutral-2);
}

.content {
  margin-left: 5%;
}
</style>
