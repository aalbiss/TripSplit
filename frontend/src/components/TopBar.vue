<script setup>
import { computed } from 'vue'

const navbarHeight = computed(() => {
  if (window.innerHeight < 600) return 'h-[10dvh]' // Small screen
  if (window.innerHeight < 900) return 'h-[8dvh]' // Tablet
  return 'h-[6dvh]' // Desktop
})
</script>

<template>
  <nav
    class="flex justify-between items-center border-b-2 border-gray-400 p-4"
    :class="navbarHeight"
  >
    <!-- TODO: redirect to the previus page -->
    <!-- Annulla Button -->
    <button class="text-MidnightBlue-500 underline" onclick="alert('Annulla')">Annulla</button>
    <!-- Create Group title -->
    <div class="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">
      Crea Gruppo
    </div>
  </nav>
</template>
