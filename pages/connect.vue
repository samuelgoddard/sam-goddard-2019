<template>
  <section> 
    <div class="w-4/5 xl:w-3/5 mb-12 md:mb-16">
      <h1 class="text-xl md:text-2xl xl:text-3xl font-normal leading-tight mb-4">You can stalk me online at <strong>the following places</strong></h1>
    </div>

    <div class="flex flex-wrap -mx-8">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-12 px-8" v-for="place in connectPlaces" :key="place.id">
        <h2 class="text-base md:text-md xl:text-lg mb-1 block">{{ place.title }}</h2>
        <!-- <p class="font-serif font-light mb-4">{{ place.excerpt }}</p> -->

        <a class="text-white font-sans text-sm" rel="noopener" target="_blank" :href="place.linkUrl">
          {{ place.linkText }}
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