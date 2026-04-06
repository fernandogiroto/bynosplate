<template>
  <Header />
  <router-view v-slot="{ Component }">
    <main>
      <transition :name="'fade'" mode="out-in">
        <component :is="Component" :key="Component" />
      </transition>
    </main>
  </router-view>
  <Transition name="slide-up">
    <Footer v-if="showFooter" />
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'

const route = useRoute()
const showFooter = ref(false)

watch(
  () => route.name,
  (name) => {
    if (name === 'intro') {
      showFooter.value = false
    } else {
      setTimeout(() => {
        showFooter.value = true
      }, 1000)
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
  @use '@/scss/theme.scss';
</style>
