<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-gezi"></use>
      </svg>
      <span>首页</span>
    </router-link>
    <div class="doc-wrapper">
      <ul class="doc">
        <li>
          <router-link to="/doc">指南</router-link>
        </li>
      </ul>
      <a
        href="https://www.yuque.com/qingyou-tkchw/lp26se/kgpgchlbmi8pd5d4"
        target="_blank"
        class="blog"
        >语雀</a
      >
    </div>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: space-between;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-left: 200px;
    display: flex;
    align-items: center;
    > svg {
      width: 2em;
      height: 2em;
    }
  }
  > .doc-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    > .blog {
      margin-left: 1em;
    }
  }
  > .doc {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .doc-wrapper {
      .doc {
        display: none;
      }
    }
    .topnav {
      display: flex;
      justify-content: space-between;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
