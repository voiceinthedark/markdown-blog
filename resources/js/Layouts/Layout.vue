<script setup>
import { router } from "@inertiajs/vue3";
import NavLink from "../Components/Shared/NavLink.vue";
import { store } from "../stores/useSharedStore";
import { watch, ref } from "vue";
import SideLayout from "./SideLayout.vue";
import IconGithub from "../Components/Icons/IconGithub.vue";

let tableOfContents = ref(null);

watch(
    () => store.sharedData,
    (newVal) => {
        tableOfContents.value = newVal;
    }
);

</script>

<template>
    <main class="grid grid-cols-1 lg:grid-cols-6">
        <header class="mt-20 rounded-r-sm lg:min-h-screen">
            <div
                class="top-0 flex flex-col items-start gap-5 px-3 py-6 mb-6 text-2xl lg:sticky"
            >
                <NavLink href="/" :active="$page.url === '/'">Home</NavLink>
                <NavLink href="/blog/" :active="$page.url.startsWith('/blog')"
                    >Blog</NavLink
                >
                <NavLink href="/note/" :active="$page.url.startsWith('/note')">Notes</NavLink>
                <NavLink href="/about/" :active="$page.url.startsWith('/about')">About</NavLink>
            </div>
        </header>
        <article
            class="min-w-[100%] mx-2 grid grid-cols-1 gap-1 mt-20 lg:col-span-4 mb-28 scroll-smooth"
        >
            <slot />
        </article>
        <aside>
            <SideLayout :toc="tableOfContents" />
        </aside>
        <footer class="w-screen py-12 mt-12 bg-gray-800/50">
            <div class="flex items-center justify-center gap-2">
                <span>Copyright &copy; 2023</span>
                <span id="github" class="w-7 h-7">
                    <a href="https://github.com/voiceinthedark" target="_blank">
                        <IconGithub />
                    </a>
                </span>
            </div>
        </footer>
    </main>
</template>

<style scoped>

#github:hover{
    animation: turn 2s ease-in 0s infinite alternate;
    transition: all 0.3s ease;
}

@keyframes turn {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}
</style>
