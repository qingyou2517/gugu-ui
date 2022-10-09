<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="gugu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="gugu-dialog-wrapper">
        <div class="gugu-dialog">
          <header>
            <slot name="title" />
            <span class="gugu-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts" setup="props, context">
import Button from "./Button.vue";

const props = defineProps<{
  visible?: boolean;
  closeOnClickOverlay?: boolean;
  ok?: () => boolean;
  cancel?: () => void
}>();
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
const close = () => {
  emit('update:visible', false)
}
const onClickOverlay = () => {
  //如果开启 closeOnClickOverlay，则 close
  if (props.closeOnClickOverlay) {
    close()
  }
}
const ok = () => {
  //等价于 if(props.ok && props.ok()!==false)
  if (props.ok?.() !== false) {
    //为true，则关闭对话框
    //意味着ok可以通过return false来阻止关闭
    close()
  }
}
const cancel = () => {
  props.cancel?.()
  close()
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gugu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before, &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>