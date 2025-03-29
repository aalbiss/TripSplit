<script setup>
import { RouterLink } from 'vue-router'

import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const response = await axios.post('http://192.168.1.118:8080/api/auth/login', {
      email: email.value,
      password: password.value,
    })
    console.log(response.data)

    const firstLoginResponse = await axios.get('http://192.168.1.118:8080/api/auth/first-login', {
      params: { email: email.value },
    })
    localStorage.setItem('authToken', response.data.token)
    const firstLogin = firstLoginResponse.data

    if (firstLogin) {
      router.push('/start')
    } else {
      router.push('/prova')
    }
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
  <!--Copy from here -->
  <div
    class="bg-gradient-to-tl from-LavenderBlush-50 via-LavenderBlush-50 to-LightSteelBlue-200 min-h-svh flex items-center justify-center p-4"
  >
    <!-- Main Container with Glass Effect -->
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
          <h2 class="text-3xl text-black">Benvenuto</h2>
          <p class="text-gray-500 mt-2">Accedi per continuare</p>
        </div>

        <form @submit.prevent="login" class="space-y-6">
          <!-- Email Input -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="email"> Email </label>
            <div class="relative">
              <i
                class="pi pi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              ></i>
              <input
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                type="email"
                id="email"
                placeholder="Inserisci email"
                v-model="email"
                required
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
              Password
            </label>
            <div class="relative">
              <i
                class="pi pi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              ></i>
              <input
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                type="password"
                id="password"
                placeholder="Inserisci password"
                v-model="password"
                required
              />
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="remember"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label class="ml-2 text-gray-600 text-sm" for="remember"> Ricordami </label>
            </div>
            <a
              href="#"
              class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >Dimenticata la password?</a
            >
          </div>

          <!-- Sign In Button -->
          <button
            type="submit"
            class="w-full bg-MidnightBlue-500 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Accedi
          </button>
        </form>

        <!-- Sign Up Link -->
        <p class="flex justify-center items-center text-gray-500 mt-2">Oppure</p>
        <div class="flex justify-center items-center">
          <RouterLink to="/signup"
            ><button
              type="submit"
              class="w-64 bg-MediumPurple-500 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Registrati
            </button></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
