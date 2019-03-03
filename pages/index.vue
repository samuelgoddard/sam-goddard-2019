<template>
<section>
  <div class="flex flex-wrap w-full sm:w-4/5 xl:w-3/5">
    <h1 class="text-xl md:text-3xl xl:text-4xl font-black leading-tight mb-4">Hey, i'm Sam</h1>

    <h2 class="text-xl md:text-2xl xl:text-3xl font-light mb-8 leading-tight">i'm a web developer from nottingham with ten plus years of experience in methodical <span class="font-bold">html</span>, <span class="font-bold">css</span> and <span class="font-bold">javascript</span>.</h2>
    
    <p class="font-sans text-base leading-normal mb-12 sm:mb-20">i'm really interested in <span class="font-bold">scaleable front-end development</span>, <span class="font-bold">design systems</span>, <span class="font-bold">craft cms</span> and <span class="font-bold">vuejs</span> - outside of work, i just <span class="font-bold">fucking love labradors</span> 🐶</p>
  </div>
</section>
</template>

<script>

import ArrowIcon from '@/assets/icons/arrow.svg';

export default {
  transition: 'fade',
  components: {
    ArrowIcon
  },
  methods: {
  }
}
</script>