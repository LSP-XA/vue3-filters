<template>
  <div class="menu-set-update">
    <div class="page-box">
      <div class="form-box search-box">
        <div class="form-title">菜单信息</div>
        <a-form
          class="form-content"
          ref="ruleForm"
          :model="form"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 14 }"
        >
          <a-form-item
            label="适用范围:"
            name="scope"
            v-bind="validateInfos.scope"
          >
            <a-select
              v-model:value="form.scope"
              :defaultValue="form.scope"
              placeholder="适用范围"
            >
              <a-select-option value="1"> 定制 </a-select-option>
              <a-select-option value="2"> 通用 </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit"> 提交 </a-button>
            <a-button @click="goBack"> 取消 </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRaw } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useForm } from '@ant-design-vue/use';
import Route from '@/utils/route';
export default {
  name: 'MenuSetUpdate',
  setup() {
    const route = reactive(Route.getRoute().query);
    console.log(route);
    const form = reactive({
      scope: undefined
    });
    const rulesRef = reactive({
      scope: [
        {
          required: true,
          message: '请选择适用范围'
        }
      ]
    });
    const { validate, validateInfos } = useForm(form, rulesRef);
    const onSubmit = function (e: any) {
      e.preventDefault();
      validate()
        .then(() => {
          console.log(toRaw(form));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    const router = useRouter();
    const goBack = function () {
      router.push({
        path: '/?id=1'
      });
    };
    onBeforeRouteUpdate((to) => {
      console.log(to);
      console.log(Route.getRoute().query);
    });
    return {
      form,
      validateInfos,
      onSubmit,
      goBack
    };
  }
};
</script>
