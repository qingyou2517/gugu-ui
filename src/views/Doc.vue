<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>指南</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li class="startUse">
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";

export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    margin-top: 65px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  height: calc(100% - 65px);
  overflow-y: auto;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0 16px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    padding: 0 16px;
    margin-bottom: 4px;

    font-weight: bold;
  }
  > ol .startUse {
    margin-bottom: 12px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 24px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
        color: #f60;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
