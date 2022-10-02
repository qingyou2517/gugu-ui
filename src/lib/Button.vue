<template>
  <button class="gugu-button" :class="`gugu-theme-${theme}`">
    <slot />
  </button>
</template>
<script lang="ts">
import {computed} from 'vue';

export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`gugu-theme-${theme}`]: theme,
        [`gugu-size-${size}`]: size,
      };
    })
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gugu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 30px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  //第一个 .gugu-button 不执行 margin-left: 8px;
  & + & {
    margin-left: 8px;
    margin-top: 4px;
  }
  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  //:focus 兼容 firefox 的写法
  &::-moz-focus-inner {
    border: 0;
  }
  &.gugu-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 10%);
    }
  }
  &.gugu-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
}
</style>