<template>
  <div> 
    <section class="container flex flex-wrap items-center md:min-h-screen py-8 md:py-12">
      <div>
        <h1 class="mb-8 md:mb-12 font-serif font-medium">you can stalk me at <span class="block italic font-bold">these places</span></h1>

        <div class="flex flex-wrap -mx-8">
          <div class="w-full sm:w-1/2 md:w-1/3 mb-12 px-8" v-for="place in connectPlaces" :key="place.id">
            <h2 class="font-serif font-medium">{{ place.title }}</h2>
            <!-- <p class="font-serif font-light mb-4">{{ place.excerpt }}</p> -->

            <a class="btn font-light border-b-2 border-dashed no-underline inline-block py-2" rel="noopener" target="_blank" :href="place.linkUrl" @mouseenter="tweenHover" @mouseleave="tweenReset">
              {{ place.linkText }}
              <external-icon class="w-5"></external-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <div @mouseenter="tweenHover" @mouseleave="tweenReset">
        <nuxt-link to="/" v-on:click.native="tweenReset" class="border-2 border-dashed flex justify-center items-center h-12 w-12 fixed pin-b pin-l m-4 font-mono toggle-dark-mode rounded rounded-full transition">
          <back-icon class="w-6"/>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
import BackIcon from '@/assets/icons/back.svg';
import ExternalIcon from '@/assets/icons/external.svg';

export default {
  components: {
    BackIcon,
    ExternalIcon,
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
  data() {
    return {
      connectPlaces: [{
        id: 0,
        title: 'github',
        linkText: 'samuelgoddard',
        linkUrl: 'https://github.com/samuelgoddard'
      },{
        id: 1,
        title: 'twitter',
        linkText: 'samuelgoddard',
        linkUrl: 'https://twitter.com/samuelgoddard'
      },{
        id: 2,
        title: 'instagram',
        linkText: 'samgoddard',
        linkUrl: 'https://instagram.com/samgoddard'
      },{
        id: 3,
        title: 'linkedin',
        linkText: 'sam-goddard-kind',
        linkUrl: 'https://www.linkedin.com/in/sam-goddard-kind/'
      },{
        id: 4,
        title: 'spotify',
        linkText: 'sam_goddard',
        linkUrl: 'https://open.spotify.com/user/sam_goddard'
      },{
        id: 5,
        title: 'email',
        linkText: 'message me',
        linkUrl: 'mailto:hello@samgoddar'
      },{
        id: 6,
        title: 'stackoverflow',
        linkText: 'sam-goddard',
        linkUrl: 'https://stackoverflow.com/users/6204711/sam-goddard'
      }]
    }
  }
}
</script>