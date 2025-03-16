<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
</script>

<template>
  <Login />
  <Navbar />
  <RouterView />
</template>
