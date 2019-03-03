<template>
  <section class="pb-12 sm:pb-24"> 
    <div class="w-4/5 xl:w-3/5 mb-12 md:mb-16">
      <h1 class="text-xl md:text-2xl xl:text-3xl font-normal leading-tight mb-4">I'm curently working on <strong>the following stuff</strong></h1>
    </div>

    <div class="flex flex-wrap -mx-8">
      <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-12 px-8" v-for="stuff in currentStuff" :key="stuff.id">
        <h2 class="text-base md:text-md xl:text-lg mb-3 block">{{ stuff.title }}</h2>
        <p class="font-sans text-sm leading-normal mb-4">{{ stuff.excerpt }}</p>

        <a class="link font-sans text-sm" rel="noopener" target="_blank" :href="stuff.linkUrl">
          {{ stuff.linkText }}
          <external-icon class="w-4"></external-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ExternalIcon from '@/assets/icons/external.svg';

export default {
  transition: 'fade',
  components: {
    ExternalIcon,
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