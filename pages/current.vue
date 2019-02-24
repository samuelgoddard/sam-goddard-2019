<template>
  <div> 
    <section class="container flex flex-wrap items-center md:min-h-screen py-8 md:py-12">
      <div>
        <h1 class="mb-8 md:mb-12 font-serif font-medium">i'm currently working on <span class="block italic font-bold">this stuff</span></h1>

        <div class="flex flex-wrap -mx-8">
          <div class="w-full md:w-1/2 mb-12 px-8" v-for="stuff in currentStuff" :key="stuff.id">
            <h2 class="font-serif font-medium mb-3">{{ stuff.title }}</h2>
            <p class="font-serif font-light mb-4">{{ stuff.excerpt }}</p>

            <a class="btn font-light border-b-2 border-dashed no-underline inline-block py-2" rel="noopener" target="_blank" :href="stuff.linkUrl" @mouseenter="tweenHover" @mouseleave="tweenReset">
              {{ stuff.linkText }}
              <external-icon class="w-5"></external-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <div @mouseenter="tweenHover" @mouseleave="tweenReset">
        <nuxt-link v-on:click.native="tweenReset" to="/" class="border-2 border-dashed flex justify-center items-center h-12 w-12 fixed pin-b pin-l m-4 font-mono toggle-dark-mode rounded rounded-full transition">
          <back-icon class="w-6"></back-icon>
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
  data() {
    return {
      currentStuff: [{
        id: 0,
        title: 'modular front end development @ kind',
        excerpt: 'sit amet consectetur adipisicing elit. Dicta quaerat ipsum non incidunt rerum assumenda libero quae? Possimus cum, dolore in magni aliquam odio.',
        linkText: 'madebykind.com',
        linkUrl: 'https://madebykind.com'
      },{
        id: 1,
        title: 'docs maintenance & core team @ fractal',
        excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quaerat ipsum non incidunt rerum assumenda libero quae?',
        linkText: 'fractal.build',
        linkUrl: 'http://fractal.build'
      },{
        id: 2,
        title: 'fully learning tailwind css @ home',
        excerpt: 'sit amet consectetur adipisicing elit. Dicta quaerat ipsum non incidunt rerum assumenda libero quae? Possimus cum, dolore in magni aliquam odio.',
        linkText: 'tailwindcss.com',
        linkUrl: 'https://tailwindcss.com/'
      },{
        id: 3,
        title: 'figuring out the jamstack @ home',
        excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quaerat ipsum non incidunt rerum assumenda libero quae?',
        linkText: 'jamstack.org',
        linkUrl: 'https://jamstack.org/'
      }]
    }
  }
}
</script>