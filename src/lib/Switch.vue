<template>
  <button :class="{checked:isChecked}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup(){
    const isChecked=ref(false)
    const toggle=()=>{
      isChecked.value=!isChecked.value
    }
    return {isChecked,toggle}
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
}
button.checked{
  background: blue;
  &>span{
    left: calc(100% - 18px - 2px);
  }
}
</style>