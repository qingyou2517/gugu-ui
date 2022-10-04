<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav">
      <div class="gugu-tabs-nav-item"
           v-for="(title,index) in titles"
           @click="isSelected(title)" :class="{selected: title=== selectedTitle}"
           :key="index">
        {{title}}
      </div>
    </div>
    <div class="gugu-tabs-content">
      <component class="gugu-tabs-content-item"
                 v-for="component in defaults" :is="component" :class="{selected: component.props.title === selectedTitle }"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  props: {
    selectedTitle: {
      type: String
    }
  },
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
    const isSelected = (title: string) => {
      context.emit('update:selectedTitle', title)
    }
    return {defaults, titles, isSelected}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gugu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>