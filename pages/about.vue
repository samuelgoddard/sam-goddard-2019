<template>
  <section class="pb-12 sm:pb-24"> 
    <div class="w-4/5 xl:w-3/5 mb-12 md:mb-16">
      <h1 class="text-xl md:text-2xl xl:text-3xl font-serif leading-tight mb-4">A little more <span class="font-serif-bold">about me</span></h1>
    </div>

    <div class="w-full md:w-4/5 xl:w-3/5 mb-8 md:mb-0">
      <div class="">
        <p class="text-lg mb-6 leading-tight font-serif">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa.</p>

        <p class="text-sm leading-normal font-sans mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa.</p>

        <p class="text-sm leading-normal font-sans mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio illum nam quasi.</p>

        <div class="flex flex-wrap -mx-3 mb-6 md:mb-12">
        <figure class="mt-2 px-3 w-3/5">
          <img src="~/assets/images/sam-hol-llama.jpg" alt="Sam, Hol and Marvin (The Llama)" />
          <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Me, Hol, and our alpaca friends</figcaption>
        </figure>

        <figure class="mt-2 px-3 w-2/5">
          <img src="~/assets/images/sam-dog2.jpg" alt="Sam and Winny" />
          <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Win helping me squash some bugs</figcaption>
        </figure>
        </div>

        <h2 class="text-lg md:text-xl font-light mb-6 leading-tight">Something else about me</h2>

        <p class="text-sm leading-normal font-sans mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio illum nam quasi.</p>

        <p class="text-sm leading-normal font-sans mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio illum nam quasi.</p>

        <div class="flex flex-wrap -mx-3 mb-6 md:mb-12">
          <figure class="mt-2 px-3 w-1/2">
            <img src="~/assets/images/sam-beach.jpg" alt="Sam beach clean" />
            <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Helping Surfers Against Sewage clean up Newborough Beach</figcaption>
          </figure>

          <figure class="mt-2 px-3 w-1/2">
            <img src="~/assets/images/sam-kind-squad.jpg" alt="Sam as a parrot" />
            <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Some of the Kind gang go paddle boarding in Wales</figcaption>
          </figure>
        </div>

        <h2 class="text-lg md:text-xl font-light mb-6 leading-tight">Something else about me</h2>

        <p class="text-sm leading-normal font-sans mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio illum nam quasi.</p>

        <p class="text-sm leading-normal font-sans mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi delectus quos alias minus, natus aut eligendi aperiam at accusamus. Quo sed nobis possimus? Non, eos. Laborum, maxime. Aperiam, quo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio illum nam quasi.</p>

        <div class="flex flex-wrap -mx-3">
          <figure class="mt-2 px-3 w-1/2 md:w-1/3">
            <img src="~/assets/images/sam.jpg" alt="Picture of Sam holding a nice pooch" />
            <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Me and my new friend Fred</figcaption>
          </figure>

          <figure class="mt-2 px-3 w-1/2 md:w-1/3">
            <img src="~/assets/images/sam-lovebirds.jpg" alt="Sam and Love birds" />
            <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Me with some awesome love birds</figcaption>
          </figure>

          <figure class="mt-2 px-3 w-1/3 hidden md:block">
            <img src="~/assets/images/sam-dog1.jpg" alt="Sam and Winny" />
            <figcaption class="font-sans text-grey text-2xs sm:text-xs py-2 leading-normal">Me and my best mate Win</figcaption>
          </figure>
        </div>
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
    }
  }
}
</script>