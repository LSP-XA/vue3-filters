<template>
  <a-layout class="layout">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Menu msg="123" />
      </a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import Menu from '@/components/Menu.vue';

export default {
  components: { Menu }
};
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  .ant-layout-footer {
    padding-top: 14px;
    padding-bottom: 14px;
  }
}
</style>
