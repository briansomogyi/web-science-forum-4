<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { ws } from './ws'
const phone = ref('')
watch(phone, (newPhone, oldPhone) => {
  if (newPhone != oldPhone) {
    ws.send(newPhone)
  }
})
import { useWsStore } from './stores/wsStore'
const wsStore = useWsStore()
const wsPhone = computed(() => wsStore.phone)
watch(wsPhone, (new_wsPhone) => {
  phone.value = new_wsPhone;
})
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "tailwindcss";
</style>