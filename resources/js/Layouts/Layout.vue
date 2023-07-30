<script setup>
import { router } from '@inertiajs/vue3';
import NavLink from '../Components/Shared/NavLink.vue';
import { store } from '../stores/useSharedStore';
import { watch, ref } from 'vue';
import SideLayout from './SideLayout.vue';

let tableOfContents = ref(null);

watch(() => store.sharedData, (newVal) => {
    // console.log(`received in layout: ${newVal}`);
    tableOfContents.value = newVal;
    // console.log(tableOfContents.value);
});


</script>

<template>
  <main class="grid grid-cols-1 lg:grid-cols-6">
    <header class="mt-20 rounded-r-sm lg:min-h-screen">
      <div class="top-0 flex flex-col items-start gap-1 px-3 py-6 mb-6 text-2xl lg:sticky">
          <NavLink href="/" :active="$page.url === '/'">Home</NavLink>
          <NavLink href="/blog/" :active="$page.url.startsWith('/blog')">Blog</NavLink>
      </div>
    </header>
    <article class="min-w-[100%] mx-2 grid grid-cols-1 gap-1 mt-20 lg:col-span-4 mb-28 scroll-smooth">
      <slot name="default"/>
    </article>
    <aside>
        <SideLayout :toc="tableOfContents"/>
    </aside>
  </main>
</template>
