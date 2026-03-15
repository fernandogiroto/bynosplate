<template>
    <header>
        <div class="hero-content">
            <h1>Seu Restaurante</h1>
            <p>Experiência gastronômica incrível</p>
        </div>
    </header>
</template>

<style lang="scss">
 @use '@/scss/mixings';

header {
    @include mixings.flexbox(row, center, center);
  position: relative;
  width: 100%;
  height: 20rem;
  background-image: url('/img/background.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
 
}

/* Overlay */
header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* ajuste a opacidade aqui */
  z-index: 1;
}

/* Conteúdo acima do overlay */
.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
}

</style>