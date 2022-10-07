<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav" ref="container">
      <div class="gugu-tabs-nav-item"
           v-for="(title,index) in titles"
           :ref="el => { if (title===selectedTitle) selectedItem = el }"
           @click="isSelected(title)" :class="{selected: title=== selectedTitle}"
           :key="index">
        {{title}}
      </div>
      <div class="gugu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gugu-tabs-content">
      <component class="gugu-tabs-content-item"
                 v-for="component in defaults" :is="component" :class="{selected: component.props.title === selectedTitle }"/>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted,  ref, watchEffect } from 'vue'
import Tab from './Tab.vue'

export default {
  props: {
    selectedTitle: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null)
    const indicator = ref < HTMLDivElement > (null)
    const container = ref < HTMLDivElement > (null)
    onMounted(() => {
      watchEffect(()=>{
        const {width} = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2} = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      },{flush: 'post'})
    })
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const isSelected = (title: string) => {
      context.emit('update:selectedTitle', title)
    }
    return {defaults, titles, isSelected,selectedItem, indicator, container}
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
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