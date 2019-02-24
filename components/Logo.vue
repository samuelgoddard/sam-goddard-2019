<template>
  <div ref="box" class="box h-12 w-12 bg-red"></div>
</template>

<script>
import { TweenLite } from 'gsap'
export default {
  methods: {
    tween() {
      TweenLite.to(this, 0.3, {
        css: {
          left: e.pageX,
          top: e.pageY
        }
      });
    }
  }
}
</script>

<style>
/* styles emitted */
</style>