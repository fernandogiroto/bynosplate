<template>
  <div class="page">
    <div class="menu">
      <span class="menu__subtitle">Destaques</span>
      <span class="menu__title">Os Mais Pedidos</span>
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(card, index) in cards" :key="index">
          <Card class="card-carousel">
            <template #header>
                <img class="card-carousel__image" alt="user header" src="/img/tapioca.png" />
            </template>
            <template #title>Tapioca com Queijo</template>
            <template #subtitle>Card subtitle</template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
    </div>
    <div class="menu">
      <span class="menu__subtitle">Cardápio</span>
      <span class="menu__title">Nosso Menu</span>
      <Tabs value="0">
          <TabList>
              <Tab value="0" as="div" class="flex items-center gap-2">
                  <span class="font-bold whitespace-nowrap">Pratos Principais</span>
              </Tab>
              <Tab value="1" as="div" class="flex items-center gap-2">
                  <span class="font-bold whitespace-nowrap">Hamburguers</span>
              </Tab>
              <Tab value="3" as="div" class="flex items-center gap-2">
                  <span class="font-bold whitespace-nowrap">Saladas</span>
              </Tab>
          </TabList>
          <TabPanels>
              <TabPanel value="0" as="p" class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              </TabPanel>
              <TabPanel value="1" as="p" class="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              </TabPanel>
              <TabPanel value="3" as="p" class="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              </TabPanel>
          </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>

  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide } from 'vue3-carousel'
  import Card from 'primevue/card'

  import Tabs from 'primevue/tabs';
  import TabList from 'primevue/tablist';
  import Tab from 'primevue/tab';
  import TabPanels from 'primevue/tabpanels';
  import TabPanel from 'primevue/tabpanel';

  import { useRouter } from 'vue-router'
  const router = useRouter()

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
    }
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

  @use '@/scss/mixings';

  .card-carousel {
    width: 100%;
    height: 100%;
    &__image {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }

  .page {
    @include mixings.flexbox(column, initial, initial);
    gap: 2rem;
    padding: 2rem 1rem;
    margin-bottom: 5rem;
  }

  .menu {
    @include mixings.flexbox(column, initial, initial);
    &__subtitle {
      font-size: 0.875rem;
      color: #888;
    }
    &__title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }

</style>