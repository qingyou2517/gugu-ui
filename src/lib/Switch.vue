<template>
  <button class="gugu-switch" :class="{'gugu-checked':value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts" setup="props, context">
const props = defineProps<{
  value: boolean
}>()
const emit = defineEmits<{
  (e: 'update:value', visible: boolean): void;
}>()
const toggle=()=>{
  emit('update:value',!props.value)
}
</script>

<style lang="scss">
$h:22px;

.gugu-switch{
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h/2);
  position: relative;
  > span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background: #ffffff;
    border-radius: 50%;
    transition: all 250ms;
  }
  &.gugu-checked{
    background: #1890ff;
    &>span{
      left: calc(100% - 18px - 2px);
    }
  }
  &:active{
    > span {width: 18px + 4px;}
  }
  &.gugu-checked:active{
    > span {width: 18px + 4px; margin-left: -4px;}
  }
}
</style>