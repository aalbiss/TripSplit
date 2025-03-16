<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="mt-20">
      <h1 class="text-center text-xl font-semibold">TripSplit</h1>
    </div>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100 w-full max-w-xs">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="mb-4 text-lg font-semibold">Login</h2>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
        <label class="block text-gray-700 text-sm font-bold mt-4 mb-2" for="password"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <button
          class="w-full bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
      <div class="text-center">
        <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">Sign Up</button>
      </div>
    </div>
  </div>
</template>
