<template>
  <div >
    <div v-for="(title,index) in titles" :key="index">{{title}}</div>
    <component v-for="(component,index) in defaults" :is="component" :key="index" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {
      defaults,
      titles
    }
  }
}
</script>