<template>
<div class="min-h-screen transition-darkmode" :class="darkModeClass ? 'bg-white' : 'bg-black'">
  <div class="font-serif antialiased container transition-darkmode" :class="darkModeClass ? 'text-black' : 'text-white'">
    
    <header class="m-header pt-12 pb-12 sm:pb-24">      
      <div class="flex flex-wrap items-center">
        <nav class="m-nav sm:flex sm:flex-wrap sm:items-end">
          <nuxt-link to="/" class="mb-2 block no-underline sm:inline mr-8 mb-3 sm:mb-0 leading-none font-serif-bold text-md xl:text-lg transition-darkmode" :class="darkModeClass ? 'text-black' : 'text-white'">Sam Goddard</nuxt-link>
          <nuxt-link to="/" class="nav-item">home</nuxt-link>
          <nuxt-link to="/about" class="nav-item">about</nuxt-link>
          <nuxt-link to="/current" class="nav-item">work</nuxt-link>
          <nuxt-link to="/resume" class="nav-item">resume</nuxt-link>
          <nuxt-link to="/connect" class="nav-item">connect</nuxt-link>
        </nav>

        <nav class="m-nav ml-auto text-right hidden md:flex md:items-end">
          <a href="https://twitter.com/samuelgoddard" target="_blank" rel="noopener" class="nav-item nav-item--social w-5 h-4"><twitter-icon class="w-5 h-5" /></a>
          <a href="https://instagram.com/samgoddard" target="_blank" rel="noopener" class="nav-item nav-item--social w-5 h-4"><instagram-icon class="w-5 h-5" /></a>
          <a href="https://github.com/samuelgoddard" target="_blank" rel="noopener" class="nav-item nav-item--social w-5 h-4"><github-icon class="w-5 h-5" /></a>

          <button @click="$store.commit('ui/TOGGLE_COLOR_MODE')" class="nav-item nav-item--social mr-0 w-5 h-4">
            <bulbcross-icon class="w-4 h-5" v-if="darkModeClass" />
            <bulb-icon class="w-4 h-5" v-else />
          </button>
        </nav>
      </div>
    </header>
    <div class="w-full">
      <nuxt />
    </div>
  </div>
</div>
</template>

<script>
import TwitterIcon from '@/assets/icons/twitter.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import GithubIcon from '@/assets/icons/github.svg';
import BulbcrossIcon from '@/assets/icons/bulbcross.svg';
import BulbIcon from '@/assets/icons/bulb.svg';

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ui");

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    GithubIcon,
    BulbcrossIcon,
    BulbIcon
  },
  computed: {
    ...mapState(["colorMode", "menuOpen"]),
    darkModeClass() {
      return this.colorMode;
    },
  },
  head() {
    return {
      bodyAttrs: {
        class:  this.colorMode ? 'dark-mode' : ''
      }
    }
  }
}
</script>