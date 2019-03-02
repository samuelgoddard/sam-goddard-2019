<template>
<div class="bg-black min-h-screen">
  <div class="font-serif antialiased text-white container">

    <header class="m-header pt-12 pb-12 sm:pb-24">      
      <div class="flex flex-wrap items-center">
        <nav class="m-nav sm:flex sm:flex-wrap sm:items-end">
          <nuxt-link to="/" class="mb-2 block text-white no-underline sm:inline mr-8 mb-3 sm:mb-0 leading-none font-bold text-md xl:text-lg">Sam Goddard</nuxt-link>
          <nuxt-link to="/" class="nav-item">home</nuxt-link>
          <nuxt-link to="/current" class="nav-item">about</nuxt-link>
          <nuxt-link to="/connect" class="nav-item">connect</nuxt-link>
        </nav>

        <nav class="m-nav ml-auto text-right hidden sm:flex sm:items-end">
          <a href="#" target="_blank" rel="noopener" class="nav-item nav-item--social w-5 h-4"><twitter-icon class="w-5 h-5" /></a>
          <a href="#" target="_blank" rel="noopener" class="nav-item nav-item--social w-5 h-4"><instagram-icon class="w-5 h-5" /></a>
          <a href="#" target="_blank" rel="noopener" class="nav-item nav-item--social w-5 h-4"><github-icon class="w-5 h-5" /></a>
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

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ui");

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    GithubIcon,
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
        class: 'color-mode-' + this.colorMode
      }
    }
  }
}
</script>