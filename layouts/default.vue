<template>
  <div class="inner-app font-serif min-h-screen">
    <div class="circle" ref="circle">
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
          top: e.clientY
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
          scale: 1,
          boxShadow: '0 0 0 250px rgba(0,0,0, 0.05), 0 0 0 100px rgba(0,0,0, 0.05)',
          width: '5px',
          height: '5px',
          // autoAlpha:0.3
        }
      });
    },
    tweenReset(e) {
      TweenLite.to(document.getElementsByClassName('circle'), 0.2, {
        css: {
          left: e.clientX,
          top: e.clientY,
          scale: 1,
          boxShadow: '0 0 0 50px rgba(0,0,0, 0.025), 0 0 0 25px rgba(0,0,0, 0.025)',
          width: '10px',
          height: '10px',
          // autoAlpha:1
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
  animation-name: hvr-bob;
  animation-duration: 10s, 10s;
  animation-delay: 0s, .5s;
  animation-timing-function: ease-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-fill-mode: forwards;
  animation-direction: normal, alternate;
  position: fixed;
  z-index: -1;
  width: 10px;
  height: 10px;
  background: currentColor;
  border-radius: 100%;
  transform-origin: 50% 50%;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 0 50px rgba(0,0,0, 0.025), 0 0 0 25px rgba(0,0,0, 0.025);
  margin: -5px 0 0 -5px;
  backface-visibility: hidden;
}
@keyframes hvr-bob {
  0% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2));
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes hvr-bob-float {
  100% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
</style>