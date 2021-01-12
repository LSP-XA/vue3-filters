<template>
  <div class="home">
    <button @click="onSubmit">222</button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import Route from '@/utils/route';
export default {
  name: 'MenuSetUpdate',
  setup() {
    const route = reactive(Route.getRoute().query);
    console.log(route);
    const router = useRouter();

    const onSubmit = function () {
      console.log(123);
      router.push({
        path: '/home',
        query: {
          id: 1
        }
      });
    };
    onBeforeRouteUpdate((to) => {
      console.log(to);
      console.log(Route.getRoute().query);
    });
    return {
      onSubmit
    };
  }
};
</script>

