<template>
  <section class="home-hero">
    <v-container fluid class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text" >
          <p>Welcome to my website. </p>
          <p>I'm a enginner</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scope>
  .home-hero__content {
    background: url("../assets/home-hero.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50vh;
    @include display_pc {
      height: 100vh;
    }

    &-text {
      color: white;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      @include display_pc {
        font-size: 40px;
      }
    }
  }

</style>
