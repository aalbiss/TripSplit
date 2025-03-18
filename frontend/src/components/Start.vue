<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!--Copy from here -->
  <div
    class="bg-gradient-to-tl from-LavenderBlush-50 via-LavenderBlush-50 to-LightSteelBlue-200 min-h-svh flex items-center justify-center p-4"
  >
    <!-- Main Container with Glass Effect -->
    <div class="w-full max-w-md">
      <!-- Logo/Brand Section
      <div class="text-center mb-8">
        <div class="flex items-center justify-center mx-auto mb-4">
          <img
            src="/src/assets/images/Logo.png"
            alt="Logo"
            class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div> -->

      <!-- Login Card -->
      <div
        class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-12 transition-all duration-500 hover:shadow-xl"
      >
        <div class="text-left">
          <h2 class="text-3xl text-black">Pronto a partire?</h2>
          <p class="text-gray-500 mt-2">Crea un gruppo o accedi ad uno già esistente!</p>
        </div>
        <div class="flex justify-center items-center">
          <button
            type="submit"
            class="w-full bg-MediumPurple-500 text-white text-xl py-4 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hovr:shadow-xl"
          >
            Crea un gruppo
          </button>
        </div>
        <div class="flex justify-center items-center pb-3">
          <button
            class="w-full bg-MediumPurple-500 text-white text-xl py-4 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hovr:shadow-xl"
          >
            Accedi ad uno esistente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
