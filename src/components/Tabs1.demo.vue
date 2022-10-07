<demo>
常规使用
</demo>

<template>
  <Tabs v-model:selectedTitle="title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航222">内容222</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from "../lib/index";
import {ref} from 'vue'

export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const title = ref('导航222')
    return {title}
  }
}
</script>