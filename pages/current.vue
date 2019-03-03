<template>
  <section class="pb-12 sm:pb-24"> 
    <div class="w-4/5 xl:w-3/5 mb-12 md:mb-16">
      <h1 class="text-xl md:text-2xl xl:text-3xl font-normal leading-tight mb-4">I'm currently hard at work on mostly <strong>the following stuff</strong></h1>
    </div>

    <div class="flex flex-wrap ">
      <div class="w-full md:w-4/5 xl:w-3/5 mb-12 md:mb-16" v-for="stuff in currentStuff" :key="stuff.id">
        <h2 class="text-md md:text-lg mb-6 leading-tight font-serif">{{ stuff.title }}</h2>
        <p class="font-sans text-sm leading-normal mb-4" v-html="stuff.excerpt"></p>

        <a class="link font-sans text-sm" rel="noopener" target="_blank" :href="stuff.linkUrl">
          {{ stuff.linkText }}
        </a>
      </div>
      

      <div class="w-4/5 xl:w-3/5 mb-8">
        <h1 class="text-xl md:text-2xl xl:text-3xl font-normal leading-tight mb-4">Some site's i've <strong>worked on</strong></h1>
      </div>
      
      <div class="w-full md:w-4/5 xl:w-3/5 mb-12 md:mb-16">
        <div class="work-list">
          <div class="mb-4" v-for="link in exampleWork" :key="link.id">
            <a :href="link.linkUrl" class="link" rel="noopener" target="_blank">{{ link.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  transition: 'fade',
  components: {
  },
  head () {
    return {
      title: "Sam Goddard | Work"
    }
  },
  data() {
    return {
      currentStuff: [{
        id: 0,
        title: 'Modular front-end development at Kind',
        excerpt: `I'm responsible for front-end standards at <a href="https://madebykind.com" class="link" rel="noopener" target="_blank">Kind</a> where I build and maintain <span class="italic">mostly</span> <a href="https://craftcms.com/" class="link" rel="noopener" target="_blank">Craft CMS</a> or <a href="https://vuejs.org/" class="link" rel="noopener" target="_blank">VueJs</a> based websites. I am currently in the process of integrating <a href="http://tailwindcss.com/" class="link" rel="noopener" target="_blank">tailwindCSS</a> into our <a href="https://nanobox.io/" class="link" rel="noopener" target="_blank">Nanobox</a> based front end boilerplate, working with <a href="http://shu.ac.uk" class="link" rel="noopener" target="_blank">Sheffield Hallam University's</a> Sitecore team to deliver a design system overhaul, and building the brand new Kind website.`,
        linkText: 'madebykind.com',
        linkUrl: 'https://madebykind.com'
      },{
        id: 1,
        title: 'Docs maintenance & core team at Fractal',
        excerpt: `I recently updated <a href="https://fractal.build/" class="link" rel="noopener" target="_blank">Fractal's</a> documentation site to <a href="https://vuepress.vuejs.org/" class="link" rel="noopener" target="_blank">Vuepress</a>. <a href="https://vuejs.org/" class="link" rel="noopener" target="_blank">VueJs</a> is the JavaScript framework of choice at Kind and this open source project was a good opportunity to learn the ropes of VuePress, a super powerful Vue and MarkDown based static site generator specifically tailored towards doc sites. I'm now working on the core maintainer team and offering feedback for their new direction with <a href="https://github.com/frctl/fractalite" class="link" rel="noopener" target="_blank">Fractalite</a>`,
        linkText: 'fractal.build',
        linkUrl: 'http://fractal.build'
      },{
        id: 2,
        title: 'Fully learning Tailwind CSS',
        excerpt: `I've been hesitantly poking around with <a href="http://tailwindcss.com/" class="link" rel="noopener" target="_blank">Tailwind</a> for a few months, but the past few projects that I've built exclusively with it have completely removed that hesitation. We were in the process of creating our own utility based framework, however, this may be our go to moving forward. I really love the composability, flexability and speed this framework gives you and am currently using it as much as possible to learn their million and one class names.`,
        linkText: 'tailwindcss.com',
        linkUrl: 'https://tailwindcss.com/'
      },{
        id: 3,
        title: 'Figuring out the JAMStack',
        excerpt: `I really can't get enough of <a href="https://jamstack.org/" class="link" rel="noopener" target="_blank">this shit</a> at the moment, I've been hammering frameworks like <a href="https://www.gatsbyjs.org/" class="link" rel="noopener" target="_blank">Gatsby</a>, <a href="https://nuxtjs.org/" class="link" rel="noopener" target="_blank">Nuxt</a>, <a href="https://vuepress.vuejs.org/" class="link" rel="noopener" target="_blank">VuePress</a>, <a href="https://gridsome.org/" class="link" rel="noopener" target="_blank">Gridsome</a> for the past few months. I've deployed a few production ready websites for absolutely free on <a href="https://www.netlify.com/" class="link" rel="noopener" target="_blank">Netlify</a>. The serverless model is something that's super intriguing to me as a primarily front-end developer who never really got into back-end. This website is built on Nuxt and hosted on Github / Netlify for completely free! I plan on getting a simple headless CMS running on it without the necessary server bloat that would usually come with something of that calibre.`,
        linkText: 'jamstack.org',
        linkUrl: 'https://jamstack.org/'
      }],
      exampleWork: [{
        id: 0,
        title: 'Sheffield Hallam University',
        linkUrl: 'http://shu.ac.uk'
      },{
        id: 1,
        title: 'Vita Training',
        linkUrl: 'https://vita-training.com/'
      },{
        id: 2,
        title: 'Nottingham Trent University',
        linkUrl: 'http://ntu.ac.uk'
      },{
        id: 3,
        title: 'Energy Technologies Institute',
        linkUrl: 'https://www.eti.co.uk/'
      },{
        id: 4,
        title: 'Henley Business School',
        linkUrl: 'http://henley.ac.uk'
      },{
        id: 5,
        title: 'Plumen Online Store',
        linkUrl: 'https://plumen.com/'
      },{
        id: 6,
        title: 'Leslie Amon Swimwear',
        linkUrl: 'https://amonswim.myshopify.com'
      }]
    }
  }
}
</script>