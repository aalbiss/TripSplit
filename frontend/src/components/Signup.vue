<script setup>
import { RouterLink } from 'vue-router'

import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const surname = ref('')
const email = ref('')
const password = ref('')

const signup = async () => {
  try {
    const response = await axios.post('http://192.168.1.118:8080/api/auth/signup', {
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
    })
    alert('Registrazione avvenuta con successo!')
    console.log(response.data)
  } catch (error) {
    if (error.response) {
      alert(error.response.data)
      console.error('Error response:', error.response.data)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}
</script>

<template>
  <div
    class="bg-gradient-to-tl from-LavenderBlush-50 via-LavenderBlush-50 to-LightSteelBlue-200 min-h-svh flex items-center justify-center p-4"
  >
    <!-- Main Container -->
    <div class="w-full max-w-md">
      <!-- Logo/Brand Section -->
      <div class="text-center mb-8">
        <div class="flex items-center justify-center mx-auto mb-4">
          <img
            src="/src/assets/images/Logo.png"
            alt="Logo"
            class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl"
          />
        </div>
      </div>

      <!-- Login Card -->
      <div
        class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-3 transition-all duration-500 hover:shadow-xl"
      >
        <div class="text-center">
          <h2 class="text-3xl text-black">Registrati</h2>
        </div>

        <form @submit.prevent="signup" class="space-y-5">
          <!-- Name Input -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-medium mb-1" for="nome"> Nome </label>
            <div class="relative">
              <i
                class="pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              ></i>
              <input
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                type="text"
                v-model="name"
                id="name"
                placeholder="Inserisci nome"
                required
              />
            </div>
          </div>

          <!-- Surname Input -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-medium mb-1" for="cognome">
              Cognome
            </label>
            <div class="relative">
              <i
                class="pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              ></i>
              <input
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                type="text"
                v-model="surname"
                id="surname"
                placeholder="Inserisci cognome"
                required
              />
            </div>
          </div>

          <!-- Email Input -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-medium mb-1" for="email"> Email </label>
            <div class="relative">
              <i
                class="pi pi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              ></i>
              <input
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                type="email"
                v-model="email"
                id="email"
                placeholder="Inserisci email"
                required
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-medium mb-1" for="password">
              Password
            </label>
            <div class="relative">
              <i
                class="pi pi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              ></i>
              <input
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                type="password"
                v-model="password"
                id="password"
                placeholder="Inserisci password"
                required
              />
            </div>
          </div>

          <!-- Button -->
          <div class="flex justify-center items-center">
            <button
              type="submit"
              class="w-64 bg-MidnightBlue-500 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hovr:shadow-xl"
            >
              Sign Up
            </button>
          </div>

          <!-- Return to login -->
          <RouterLink
            to="/"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex justify-center items-center mt-2"
          >
            <i class="pi pi-arrow-left pr-2"></i> Torna al Login
          </RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>
