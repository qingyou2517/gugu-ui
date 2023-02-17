<template>
  <div class="home">
    <Topnav />
    <div class="homeContent">
      <div class="banner">
        <h1>咕咕 UI</h1>
        <h2>简约方便的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/qingyou2517/gugu-ui">查看源码</a>
          <router-link to="/doc">start</router-link>
        </p>
      </div>
      <div class="features">
        <ul>
          <li>
            <svg>
              <use xlink:href="#icon-Vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>最新 Composition API</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript</h3>
            <p>TypeScript 书写(非严格检查)</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-sudu"></use>
            </svg>
            <h3>vite 搭建</h3>
            <p>官网急速启动</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>文档贴心，代码简洁</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-easy"></use>
            </svg>
            <h3>使用便捷</h3>
            <p>极低门槛，利于快速上手</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-ziyuan"></use>
            </svg>
            <h3>持续更新</h3>
            <p>力求稳定、丰富资源库</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.home {
  height: 100vh;
}
.banner {
  color: #fff;
  background: radial-gradient(
    circle,
    rgba(5, 40, 60, 1) 54%,
    rgba(245, 246, 247, 1) 67%,
    rgba(98, 127, 162, 1) 79%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.homeContent {
  margin-top: 65px;
  height: calc(100% - 65px);
  overflow-y: auto;
}
.features {
  margin: 64px auto;
  width: 300px;
  @media (min-width: 800px) {
    width: 800px;
    > h3 {
      font-size: 24px;
      display: inline-block;
      height: 30px;
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    //justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 4em;
        height: 4em;
      }
      > h3 {
        grid-area: title;
        font-size: 1.5em;
      }
      > p {
        grid-area: text;
        font-size: 1em;
      }
    }
  }
}
.banner {
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    margin-top: 24px;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }
  }
}
</style>
