<template>
  <div class="intro-two">
    <div class="intro-two__content">
      <span class="intro__content--label">Ristorante & Bar</span>
      <h1 class="intro__content--title">Bella Vista</h1>
      <span class="intro__content--description">Uma experiência gastronômica inesquecível</span>
    </div>
    <div class="intro-two-menu">
      <Button class="intro-two-menu__button" label="Menu do Dia" variant="outlined"  />
      <Button class="intro-two-menu__button" label="Carta" variant="outlined" @click="goTo('/menu')" />
      <Button class="intro-two-menu__button" label="Sobremesa" variant="outlined" @click="goTo('/intro-two')" />
      <Button class="intro-two-menu__button" label="Reservas" variant="outlined"  @click="goTo('/intro-two')"  />
    </div>
  </div>
</template>

<script setup lang="ts">
  import 'vue3-carousel/carousel.css'
  import Button from 'primevue/button';
  import { useRouter } from 'vue-router'
  const router = useRouter()

  function goTo(path: string) {
    router.push(path)
  }
  
</script>

<style lang="scss" >

  @use '@/scss/mixings';
  @use '@/scss/fonts' as fonts;

  .intro-two {
    @include mixings.flexbox(column, center, center);
    gap: 2rem;
    position: relative;
    &__content {
      background-image: url('/img/background.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 20;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgb(30 30 30 / 50%);
      }
      &--label {
        font-size: 1rem;
        font-family: fonts.$font-inter;
        font-weight: 400;
        text-transform: uppercase;
        color: #FFF;
      }
      &--title {
        font-size: 2.5rem;
        font-family: fonts.$font-playfair;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #FFF;
      }
      &--description {
        font-size: 1.25rem;
        font-family: fonts.$font-inter;
        font-weight: 400;
        text-align: center;
        color: #FFF;
      }
    }
  }

  .intro-two-menu {
    @include mixings.flexbox(column, flex-start, center);
    gap: 1rem;
    padding: 2rem;
    width: 100%;

    &__button {
      border: 1px solid #fff;
      width: 100%;
      color: #fff;
    }
  }

</style>