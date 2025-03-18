<script setup>
import { computed } from 'vue'

const navbarHeight = computed(() => {
  if (window.innerHeight < 600) return 'h-[10dvh]' // Schermi piccoli (es. telefoni)
  if (window.innerHeight < 900) return 'h-[8dvh]' // Tablet
  return 'h-[6dvh]' // Schermi grandi
})
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 w-full bg-LightSteelBlue border-t-2 topPurple shadow-xl flex items-center justify-center"
    :class="navbarHeight"
  >
    <ul class="flex justify-around items-center w-full max-w-lg">
      <!-- Icona utenti -->
      <li>
        <a
          href="#"
          class="flex flex-col items-center text-gray-700 hover:text-gray-500 transition-all duration-300 focus:outline-none active:text-gray-700"
        >
          <i class="pi pi-users text-xl"></i>
        </a>
      </li>

      <!-- Pulsante centrale con effetto floating -->
      <li class="relative">
        <a
          href="#"
          class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 focus:outline-none"
        >
          <i class="pi pi-plus text-2xl"></i>
        </a>
      </li>

      <!-- Icona profilo -->
      <li>
        <a
          href="#"
          class="flex flex-col items-center text-gray-700 hover:text-gray-500 transition-all duration-300 focus:outline-none active:text-gray-700"
        >
          <i class="pi pi-user text-xl"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
