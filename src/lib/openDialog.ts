import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  //把 dialog 挂载到 div 上
  const div = document.createElement("div");
  document.body.appendChild(div);

  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };

  const app = createApp({
    render() {
      return h(
        //h 渲染 dialog
        Dialog,
        //h 接收 props
        {
        //props： 可视与关闭
        visible: true,
        "onUpdate:visible": (newVisible) => {
          if (newVisible === false) {
            close();
          }
        },
        //props：ok、cancel 函数
        ok, cancel
        },
        //h 渲染插槽：title、content
        {title:title, content:content,}
      );
    },
  });

  app.mount(div);
};