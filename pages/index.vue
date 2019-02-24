<template>
  <section class="container flex flex-wrap items-center md:min-h-screen py-8 md:py-12">
    <div>
      <h1 class="mb-8 md:mb-12 font-serif font-medium">hey, i'm <span class="block italic font-bold">sam goddard</span></h1>

      <h2 class="mb-8 md:mb-12 font-serif font-normal">i'm a web developer from nottingham with ten plus years of experience in methodical <span class="italic font-bold">html</span>, <span class="italic font-bold">css</span> and <span class="italic font-bold">javascript</span></h2>

      <h3 class="mb-8 md:mb-12 font-serif font-light">i'm really interested in <span class="italic font-bold">scaleable front-end development</span>, <span class="italic font-bold">design systems</span>, <span class="italic font-bold">craft cms</span> and <span class="italic font-bold">vuejs</span> - if you're interested, take a look at <span @mouseenter="tweenHover" @mouseleave="tweenReset"><nuxt-link v-on:click.native="tweenReset" class="font-thin" to="/current" >what i'm focusing on right now</nuxt-link></span></h3>
    </div>
  </section>
</template>

<script>
export default {
  components: {
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
}
</script>