<template>
  <div class="header">
    <div class="header__content">
      <span class="header__content--label">{{ restaurant?.description ?? 'Ristorante & Bar' }}</span>
      <span class="header__content--title">{{ restaurant?.name ?? 'Bella Vista' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { getRestaurant } from '@/services/restaurant.service'
  import type { Restaurant } from '@/interfaces/restaurants'
  const restaurant = ref<Restaurant | null>(null)

  onMounted(async () => {
    try {
      restaurant.value = await getRestaurant()
      console.log('Restaurant data loaded', restaurant.value)
    } catch (e) {
      console.error('Failed to load restaurant data', e)
    }
  })

  
</script>

<style lang="scss">

  @use '@/scss/mixings';
  @use '@/scss/fonts' as fonts;

  .header {
    @include mixings.flexbox(column, initial, center);
    position: relative;
    overflow: hidden;
    &__content {
      @include mixings.flexbox(column, flex-end, center);
      padding: 1.5rem;
      width: 100%;
      height: 13rem;
      text-align: center;
      color: white;
      position: relative;
      z-index: 10;
      &--label,
      &--title {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
      }
      &--label {
        font-family: fonts.$font-inter;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: .3em;
        opacity: 0.8;
        animation-delay: 0.2s; 
      }
      &--title {
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 700;
        font-family: fonts.$font-playfair;
        animation-delay: 0.4s; 
      }
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgb(0 0 0 / 31%), rgb(0 0 0 / 28%)), url(../img/background.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        filter: brightness(0.9);
        z-index: -2;
      }
    }
    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

</style>