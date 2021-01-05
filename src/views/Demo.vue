<template>
  <div class="Demo">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ $filters.Money(str) }}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  setup() {
    //使用类型注解 更加严谨
    const data = reactive({
      girl: ['迪丽热巴', 'cabbage', '谢大脚'],
      str: 123123.1111
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>
