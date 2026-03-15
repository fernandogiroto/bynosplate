<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="(card, index) in cards" :key="index">
      <Card class="card-carousel">
        <template #header>
            <img class="card-carousel__image" alt="user header" src="/img/background.jpg" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
      </Card>

    </Slide>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Card from 'primevue/card'


const carouselConfig = {
  itemsToShow: 1.33,
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
  breakpointMode: 'carousel',
  snapAlign: 'start',         
  gap: 12,                    
  breakpoints: {
    1024: { itemsToShow: 1.33 },
    768: { itemsToShow: 1.2 },
    560: { itemsToShow: 1.33 }, 
  },
}

const cards = [
  { title: "Card 1", text: "Descrição do card 1" },
  { title: "Card 2", text: "Descrição do card 2" },
  { title: "Card 3", text: "Descrição do card 3" },
  { title: "Card 4", text: "Descrição do card 4" },
  { title: "Card 5", text: "Descrição do card 5" },
]
</script>


<style lang="scss">
.card-carousel {
  width: 100%;
    height: 100%;
    &__image {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
}

</style>