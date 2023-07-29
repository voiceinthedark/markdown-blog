<script setup>
import NavLink from '../Components/Shared/NavLink.vue';
</script>

<template>
  <main class="grid grid-cols-1 lg:grid-cols-6">
    <header class="rounded-r-sm lg:min-h-screen">
      <div class="flex flex-col items-start gap-1 px-3 py-6 mb-6 text-2xl">
          <NavLink href="/" :active="$page.url === '/'">Home</NavLink>
          <NavLink href="/blog/" :active="$page.url.startsWith('/blog')">Blog</NavLink>
      </div>
    </header>
    <article class="min-w-[100%] mx-2 grid grid-cols-1 gap-1 mt-20 lg:col-span-4">
      <slot />
    </article>
  </main>
</template>
