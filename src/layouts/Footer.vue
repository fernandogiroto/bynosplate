<template>
  <footer>
    <nav class="footer-nav">
      <router-link
        v-for="item in leftItems"
        :key="item.name"
        :to="{ name: item.name }"
        class="footer-nav__item"
        :class="{ 'footer-nav__item--active': route.name === item.name }"
      >
        <div class="footer-nav__avatar">
          <i :class="`pi ${item.icon}`"></i>
        </div>
        <span class="footer-nav__label">{{ item.label }}</span>
      </router-link>

      <router-link
        :to="{ name: 'intro' }"
        class="footer-nav__item footer-nav__item--home"
        :class="{ 'footer-nav__item--active': route.name === 'intro' }"
      >
        <div class="footer-nav__avatar">
          <i class="pi pi-home"></i>
        </div>
        <span class="footer-nav__label">Home</span>
      </router-link>

      <router-link
        v-for="item in rightItems"
        :key="item.name"
        :to="{ name: item.name }"
        class="footer-nav__item"
        :class="{ 'footer-nav__item--active': route.name === item.name }"
      >
        <div class="footer-nav__avatar">
          <i :class="`pi ${item.icon}`"></i>
        </div>
        <span class="footer-nav__label">{{ item.label }}</span>
      </router-link>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const leftItems = [
  { name: 'menu',  label: 'Menu',  icon: 'pi-th-large' },
  { name: 'carta', label: 'Carta', icon: 'pi-book'     },
]

const rightItems = [
  { name: 'vinhos',   label: 'Vinhos',   icon: 'pi-star'     },
  { name: 'reservar', label: 'Reservar', icon: 'pi-calendar' },
]
</script>

<style lang="scss">
@use '@/scss/mixings';

footer {
  @include mixings.flexbox(row, center, center);
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.75rem 1rem;
  height: 5rem;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 100;
  overflow: visible;
}

.footer-nav {
  @include mixings.flexbox(row, center, space-around);
  width: 100%;
  max-width: 480px;
  gap: 1.2rem;

  &__item {
    @include mixings.flexbox(column, center, center);
    gap: 0;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.35s ease;
  }

  &__avatar {
    @include mixings.flexbox(row, center, center);
    width: 2.6rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background 0.35s ease, box-shadow 0.35s ease, width 0.35s ease, height 0.35s ease;

    i {
      font-size: 1.1rem;
      color: #555;
      transition: color 0.35s ease, font-size 0.35s ease;
    }
  }

  &__label {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: #888;
    transition: color 0.35s ease;
  }

  &__item--active {
    gap: 0.3rem;
    transform: translateY(-1.2rem);

    .footer-nav__avatar {
      width: 3.4rem;
      height: 3.4rem;
      background: #8b1a1a;
      box-shadow: 0 4px 18px rgba(139, 26, 26, 0.45);

      i {
        font-size: 1.4rem;
        color: #ffffff;
      }
    }

    .footer-nav__label {
      color: #8b1a1a;
    }
  }

}
</style>
