<template>
    <div
        class="flex flex-col items-center justify-end mt-20 mr-3 lg:top-0 lg:sticky scroll-smooth"
    >
        <span class="font-mono text-4xl text-center">A <span class="text-sky-400">{</span>Coding<span class="text-emerald-500">}</span> <span class="underline">Journey</span></span>
        <!-- Fix for when the the users leave the page and the TOC remains persistent -->
        <div v-if="toc && toc.length > 0" class="mt-32">
            <div v-html="processedToc"></div>
        </div>
    </div>
</template>
<script setup>
import { computed, watch } from "vue";
import { store } from "../stores/useSharedStore.js";

const data = defineProps({
    toc: Object,
});

const processedToc = computed(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.toc, "text/html");
    const headings = doc.querySelectorAll("a");
    // console.log(headings);

    headings.forEach((heading) => {
        heading.addEventListener("click", handleHeadingClick);
    });

    return doc.body.innerHTML;
});

function handleHeadingClick(e) {
    console.log('object', e.target);
    e.preventDefault();
    window.scrollTo({
        top: e.target.offsetTop,
        behavior: "smooth",
    });
}

watch(
    () => store.activeHeading,
    (activeHeading) => {
        // if activeHeading is not null, search for it in the TOC
        if (activeHeading) {
            // process the TOC and toggle class active on the active heading

            // select the heading in the side TOC
            const currentAside = document.querySelector("aside");

            const headings = currentAside
                .querySelector(".table-of-contents")
                .querySelectorAll("a");
            for (const heading of headings) {
                if (heading.href.split("#")[1] === `${activeHeading}`) {
                    heading.className = "active";
                } else {
                    heading.className = "";
                }
            }
        }
    }
);
</script>

<style scoped>
:deep(.active) {
    @apply bg-sky-800 rounded-md px-2 text-white font-bold;
}

:deep(ul) {
    list-style-type: disc;
    list-style-position: inside;
}

:deep(ol) {
    list-style-type: decimal-leading-zero;
    list-style-position: outside;
}

:deep(li) {
    color: #3498db;
    margin-left: 2rem;
    font-size: 1.2rem;
}
:deep(li::marker) {
    color: #fff;
}
</style>
