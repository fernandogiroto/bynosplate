<template>
    <header>
        <div class="hero-content" v-if="route.name !== 'intro'" >
          <span class="hero-content__subtitle">{{route.name}}Ristorante & Bar</span>
            <h1 class="hero-content__title">Bella Vista</h1>
            <span class="hero-content__description">Uma experiência gastronômica inesquecível</span>
        </div>
        <div> languages</div>
    </header>
</template>

<script setup lang="ts">

  import { useRoute } from 'vue-router'
  const route = useRoute()



</script>

<style lang="scss">

  @use '@/scss/mixings';
  @use '@/scss/fonts' as fonts;

  header {
    @include mixings.flexbox(row, center, center);
    position: relative;
    width: 100%;
    height: 30rem;
    background-image: url('/img/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgb(55 55 55 / 50%);
    }
  }
  .hero-content {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;
    &__subtitle {
      font-size: 1rem;
      font-family: fonts.$font-inter;
      font-weight: 400;
      text-transform: uppercase;
    }
    &__title {
      font-size: 2.5rem;
      font-family: fonts.$font-playfair;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  }

</style>