<template>
  <div class="menu">
    <a-menu
      id="dddddd"
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu v-for="item in menuList" :key="item.key">
        <template #title>
          <span
            ><MailOutlined /><span>{{ item.name }}</span></span
          >
        </template>
        <a-menu-item v-for="row in item.children" :key="row.key"
          >Option 1</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { reactive, toRefs } from 'vue';

@Options({
  props: {
    msg: String
  }
})
export default class Menu extends Vue {
  msg!: string;
  setup() {
    console.log(123);
    const data = reactive({
      openKeys: ['1'],
      selectedKeys: ['1-1']
    });
    const menuList = reactive([
      {
        key: '1',
        name: '用户管理',
        children: [
          {
            key: '1-1',
            name: '用户列表'
          },
          {
            key: '1-2',
            name: '用户组管理'
          }
        ]
      },
      {
        key: '2',
        name: '主数据管理',
        children: [
          {
            key: '2-1',
            name: '导航菜单配置'
          },
          {
            key: '2-2',
            name: '查看子菜单'
          },
          {
            key: '2-3',
            name: '页面管理'
          }
        ]
      },
      {
        key: '3',
        name: '商家权限管理',
        children: [
          {
            key: '3-1',
            name: '商家权限定制'
          }
        ]
      }
    ]);
    const handleClick = function () {
      return 1;
    };
    return {
      menuList,
      handleClick,
      ...toRefs(data)
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
