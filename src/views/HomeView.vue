<template>
  <Card class="custom-card">
    <template #content>
      <div class="card-item">
        <img src="/img/background.jpg" alt="Imagem" class="card-item__img" />

        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>

<style lang="scss">
.card-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  &__img{
  width: 100px;        
  height: 100px;
  object-fit: cover;  
  border-radius: 8px; 
}
}



</style>