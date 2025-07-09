<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-transparent fixed w-full z-50 text-white">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-xl font-bold">
        <RouterLink to="/">Vodovod</RouterLink>
      </div>
      <ul class="flex space-x-6 font-medium">
        <li>
          <RouterLink to="/" class="hover:text-blue-300">Domov</RouterLink>
        </li>
        <li>
          <RouterLink to="/analiza" class="hover:text-blue-300">Analize</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
