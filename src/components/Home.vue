<template>
  <section class="home">
    <HomeHero/>
    <HomeAbout/>
    <HomeWork/>
    <HomeIP/>
  </section>
</template>
<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import HomeWork from './HomeWork.vue'
import HomeIP from './HomeIP.vue'
export default {
  components: {
    HomeIP,
    HomeHero,
    HomeAbout,
    HomeWork
  }
}
</script>
<style lang="scss" scope>
.home {
  padding-bottom: 50px;
}
</style>
