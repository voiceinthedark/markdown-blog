<template>
    <div
        class="flex flex-col items-center justify-end mt-20 mr-3 lg:top-0 lg:sticky"
    >
        <span class="text-4xl text-right">A {Coding} Journey</span>
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

    for (const heading of headings) {
        heading.addEventListener("click", handleHeadingClick);
    }

    return doc.body.innerHTML;
});

function handleHeadingClick(e) {
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
                // console.log(heading.href.split("#")[1], activeHeading);
                if (heading.href.split("#")[1] === `${activeHeading}`) {
                    heading.className = "active";
                    // console.log(`setting active heading to ${activeHeading}`);
                } else {
                    heading.className = "";
                    // console.log(`removing active heading from ${activeHeading}`);
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
