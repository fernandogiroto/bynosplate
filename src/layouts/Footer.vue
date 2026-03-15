<template>
    <footer>Footer</footer>
</template>

<style lang="scss">
 @use '@/scss/mixings';

footer{
    @include mixings.flexbox(row, center, center);
    width: 100%;
    height: 2rem;
    position: absolute;
    bottom: 0;
    padding: 2rem;
    border: 1px solid;
    background: #FFFFFF;
    z-index: 100;
}

</style>