<template>
  <Header v-if="route.name == 'menu'" />
  <router-view v-slot="{ Component }">
    <main>
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="Component" />
      </transition>
    </main>
  </router-view>
  <Footer v-if="route.name === 'menu'" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
const route = useRoute()
</script>

<style>
@import '@/scss/theme.scss';
</style>