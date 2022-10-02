<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
  <div>{{value}}</div>
</template>

<script lang="ts">

export default {
  props:{
    value:Boolean,
  },
  setup(props,context){
    const toggle=()=>{
      context.emit('input',!props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss" scoped>
$h:22px;

button{
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: 18px;
  width: 18px;
  background: #ffffff;
  border-radius: 50%;
  transition: left 250ms;
}
button.checked{
  background: blue;
  &>span{
    left: calc(100% - 18px - 2px);
  }
}
</style>