<template>
  <div class="inner-app font-serif min-h-screen">
    <div class="circle" ref="circle">
      <svg class="w-6" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>
    </div>
    
    <button class="border-2 border-dashed rounded rounded-full flex justify-center items-center h-12 w-12 fixed pin-b pin-r m-4 toggle-dark-mode font-mono transition" @click="$store.commit('ui/TOGGLE_COLOR_MODE')" @mouseenter="tweenHover" @mouseleave="tweenReset">
      <colorswatch-icon class="w-6 h-6" />
    </button>

    <div class="container">
      <button class="border-2 border-dashed rounded rounded-full flex justify-center items-center h-12 w-12 md:fixed pin-l pin-t mt-8 md:mt-4 md:m-4 toggle-dark-mode font-mono transition" @click="$store.commit('ui/TOGGLE_MENU')" @mouseenter="tweenHover" @mouseleave="tweenReset">
        <menu-icon v-if="!menuOpen" class="w-6" />
        <close-icon v-else class="w-6" />
      </button>

      <div class="menu" v-if="menuOpen">
        <span @mouseenter="tweenHover" @mouseleave="tweenReset">
          <nuxt-link v-on:click.native="tweenReset" class="mr-2" to="/current">about</nuxt-link>
        </span>
        <span @mouseenter="tweenHover" @mouseleave="tweenReset">
          <nuxt-link v-on:click.native="tweenReset" class="mr-2" to="/connect">connect</nuxt-link>
        </span>
      </div>
    </div>

    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';

import MenuIcon from '@/assets/icons/menu.svg';
import CloseIcon from '@/assets/icons/close.svg';
import ColorswatchIcon from '@/assets/icons/colorswatch.svg';

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ui");

export default {
  components: {
    MenuIcon,
    CloseIcon,
    ColorswatchIcon
  },
  computed: {
    ...mapState(["colorMode", "menuOpen"]),
    darkModeClass() {
      return this.colorMode;
    },
  },
  mounted() {
    document.body.addEventListener("mousemove", function(e) {
      TweenLite.to(document.getElementsByClassName('circle'), 0.2, {
        css: {
          left: e.clientX,
          top: e.clientY,
        }
      });
    })
  },
  methods: {
    tweenHover(e) {
      TweenLite.to(document.getElementsByClassName('circle'), 0.2, {
        css: {
          left: e.clientX,
          top: e.clientY,
          scale: 30,
          rotation: -45,
          margin: '50px 0 0 50px',
          opacity: 0.15,
        }
      });
    },
    tweenReset(e) {
      TweenLite.to(document.getElementsByClassName('circle'), 0.2, {
        css: {
          left: e.clientX,
          top: e.clientY,
          scale: 2,
          rotation: -90,
          margin: '-10px 0 0 -10px',
          opacity: 1
        }
      });
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'color-mode-' + this.colorMode
      }
    }
  }
}
</script>

<style>
body, a, button {
  cursor: none;
}

.circle {
  position: fixed;
  z-index: -1;
  transform: rotate(0) scale(2);
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  backface-visibility: hidden;
}
</style>