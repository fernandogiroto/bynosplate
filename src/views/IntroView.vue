<template>
  <div class="intro">
    <div class="intro__content">
      <span class="intro__content--label">{{ restaurant?.description ?? 'Ristorante & Bar' }}</span>
      <span class="intro__content--title">{{ restaurant?.name ?? 'Bella Vista' }}</span>
    </div>
    <div class="intro-menu">
      <Button class="intro-menu__button" label="Menu do Dia"  icon="pi pi-star" variant="outlined" />
      <Button class="intro-menu__button" label="Carta" icon="pi pi-book" variant="outlined"  />
      <Button class="intro-menu__button" label="Vinhos" icon="pi pi-book" variant="outlined"  />
      <Button class="intro-menu__button" label="Reservar" icon="pi pi-calendar" variant="outlined"   />
    </div>
    <div class="intro-info">
      <div class="intro-info__cards">
        <Card v-for="card in cards" :key="card.title">
            <template #content>
              <div class="intro-card">
                <i :class="card.icon" />
                <span class="intro-card__title">{{ card.title }}</span>
                <span class="intro-card__subtitle">{{ card.subtitle }}</span>
                <span class="intro-card__description" v-if="card.description">{{ card.description }}</span>
              </div>
            </template>
        </Card>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
  import 'vue3-carousel/carousel.css'
  import Button from 'primevue/button';
  import Card from 'primevue/card';

  import { ref, onMounted } from 'vue'
  import { api, type Restaurant } from '@/server/api'

  import { useRouter } from 'vue-router'
  const router = useRouter()

  const restaurant = ref<Restaurant | null>(null)

  onMounted(async () => {
    try {
      restaurant.value = await api.getRestaurant()
      console.log('Restaurant data loaded', restaurant.value)
    } catch (e) {
      console.error('Failed to load restaurant data', e)
    }
  })

  function goTo(path: string) {
    router.push(path)
  }

  const cards = ref([
    {title: 'WIFI', subtitle: 'BellaVista_Guest', description: 'vista2026', icon: 'pi pi-wifi'},
    {title: 'Telefone', subtitle: '(11) 98765-4321', description: '(11) 98765-4321', icon: 'pi pi-phone'},
    {title: 'Localização', subtitle: 'Centro, São Paulo', description: '', icon: 'pi pi-map-marker'},
    {title: 'Horário', subtitle: '12h – 23h', description: '', icon: 'pi pi-clock'},
  ])
  
</script>

<style lang="scss">

@use '@/scss/mixings';
@use '@/scss/fonts' as fonts;

.intro {
  @include mixings.flexbox(column, initial, center);
  height: 100%;
  position: relative;
  overflow: hidden;
  &__content {
    @include mixings.flexbox(column, flex-end, center);
    padding: 1.5rem;
    width: 100%;
    height: 18rem;
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
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: .3em;
      opacity: 0.8;
      animation-delay: 0.2s; 
    }
    &--title {
      font-size: 3rem;
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
  .intro-menu {
    @include mixings.flexbox(column, flex-start, center);
    gap: 0.6rem;
    backdrop-filter: blur(10px);
    z-index: 10;
    width: 100%;
    padding: 3rem 1rem;
    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    &__button {
      @include mixings.flexbox(row, flex-start, center);
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.5s ease forwards;
      gap: 0.6rem;
      padding: 0.8rem;
      width: 100%;
      background: white;
      border-radius: 0rem;
      transition: all 0.3s ease;
      color: var(--p-neutral-600);
      font-size: 1rem;
      border: 1px solid var(--p-neutral-200);
      &:nth-child(1) { animation-delay: 0.2s; }
      &:nth-child(2) { animation-delay: 0.4s; }
      &:nth-child(3) { animation-delay: 0.6s; }
      &:nth-child(4) { animation-delay: 0.8s; }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }
    }
  }
  .intro-info {
    width: 100%;
    border-top: 1px solid var(--p-neutral-200);
    &__cards{
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 1rem; 
    padding: 1.5rem;
    width: 100%;
    > * {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.5s ease forwards;
    }

    > *:nth-child(1) { animation-delay: 0.2s; }
    > *:nth-child(2) { animation-delay: 0.4s; }
    > *:nth-child(3) { animation-delay: 0.6s; }
    > *:nth-child(4) { animation-delay: 0.8s; }
    }

  }
  .intro-card {
    @include mixings.flexbox(column, center, center);
    gap: 0.1rem;
    width: 100%;
    border-radius: 0.5rem;
    &__title {
      font-size: 0.9rem;
      font-weight: 600;
      padding-top: 0.2rem;
    }
    &__subtitle {
      font-weight: 400;
      font-size: 0.8rem;
    }
    &__description {
      font-size: 0.9rem;
      color: var(--p-neutral-600);
      font-size: 0.8rem;
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