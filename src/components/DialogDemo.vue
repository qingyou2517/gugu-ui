<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog v-model:visible="x"
          :closeOnClickOverlay="false"
          :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>这行文本支持标签</strong>
      <div>这行文本支持标签</div>
    </template>
    <template v-slot:title>
      <strong>这里自定义标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggleDialog = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      //希望在对话框里填满了文本，点ok才能关闭这个对话框
      //没写，则无法靠ok来关闭:通过return false来阻止关闭
      return false;
    };
    const f2 = () => {
      //点cancel可以直接关闭
    };
    return {x, toggleDialog, f1, f2};
  }
};
</script>