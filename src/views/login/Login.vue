<template>
  <div class="login">
    <a-button>123</a-button>
    <button class="pan-btn pink-btn">123123</button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    //使用类型注解 更加严谨
    const loginData = reactive({
      account: '',
      password: ''
    });
    console.log(loginData);
    return {
      loginData
    };
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: @primary-color;
}
</style>
