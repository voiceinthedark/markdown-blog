<script setup>
import NavLink from '../Components/Shared/NavLink.vue';
</script>

<template>
  <main class="grid lg:grid-cols-6">
    <header class="bg-gray-100 lg:min-h-screen rounded-r-sm">
      <div class="flex flex-col items-start gap-1 mb-6 px-3 py-6 text-gray-800 text-2xl">
          <NavLink href="/" active="$page.component === 'Welcome'">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
      </div>
    </header>
    <article class="lg:col-span-4 ml-3 max-w-2xl mt-20">
      <slot />
    </article>
  </main>
</template>
