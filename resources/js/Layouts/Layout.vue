<script setup>
import NavLink from '../Components/Shared/NavLink.vue';
</script>

<template>
  <main class="grid lg:grid-cols-6">
    <header class="rounded-r-sm lg:min-h-screen">
      <div class="flex flex-col items-start gap-1 px-3 py-6 mb-6 text-2xl">
          <NavLink href="/" :active="$page.url === '/'">Home</NavLink>
          <NavLink href="/blog/" :active="$page.url.startsWith('/blog')">Blog</NavLink>
      </div>
    </header>
    <article class="max-w-2xl mt-20 ml-3 lg:col-span-4">
      <slot />
    </article>
  </main>
</template>
