<template>
  <button class="gugu-button" :class="classes" :disabled="disabled">
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
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`gugu-theme-${theme}`]: theme,
        [`gugu-size-${size}`]: size,
        [`gugu-level-${level}`]: level,
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
$red: red;
$grey: grey;
$radius: 4px;
button{
  width: auto;
}
.gugu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
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
  transition: background 250ms;
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

  margin-top: 4px;
  &.gugu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gugu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gugu-theme-button {
    &.gugu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover, &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gugu-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover, &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gugu-theme-link {
    &.gugu-level-danger {
      color: $red;
      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gugu-theme-text {
    &.gugu-level-main {
      color: $blue;
      &:hover, &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gugu-level-danger {
      color: $red;
      &:hover, &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gugu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gugu-theme-link, &.gugu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>