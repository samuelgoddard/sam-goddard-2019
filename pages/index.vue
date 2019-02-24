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
}
</script>