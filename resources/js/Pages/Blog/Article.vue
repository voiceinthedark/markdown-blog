<template #default>
    <div class="flex flex-col gap-9">
        <div class="flex justify-between">
            <span class="text-sm text-gray-300">{{
                formatDate(article.meta.published_at * 1000)
            }}</span>
        </div>
        <div class="text-blue-400 text-7xl">{{ article.meta.title }}</div>
        <div v-html="article.body"></div>
    </div>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import { store } from "../../stores/useSharedStore";
import Layout from "../../Layouts/Layout.vue";

defineOptions({
    layout: [Layout],
    name: "TableOfContent",
});

const props = defineProps({
    article: Object,
});

function formatDate(date) {
    const options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
    };
    return new Date(date).toLocaleDateString("en-GB", options);
}
function extractTOC(article) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(article.body, "text/html");
    let toc = doc.querySelectorAll(".table-of-contents");
    store.sharedData = toc;
    // console.log(store.sharedData);
}

onMounted(() => {
    extractTOC(props.article);
});
</script>

<style scoped>
:deep(p, .splendor-p) {
    font-size: 1.3rem;
    margin-bottom: 1.3rem;
}

:deep(h1, .splendor-h1, h2, .splendor-h2, h3, .splendor-h3, h4, .splendor-h4) {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.12;
}

:deep(h1, .splendor-h1) {
    margin-top: 0;
    font-size: 3.698rem;
}

:deep(h2, .splendor-h2) {
    font-size: 2.527rem;
}

:deep(h3, .splendor-h3) {
    font-size: 1.799rem;
}

:deep(h4, .splendor-h4) {
    font-size: 1.214rem;
}

:deep(h5, .splendor-h5) {
    font-size: 1.021rem;
}

:deep(h6, .splendor-h6) {
    font-size: 0.88rem;
}

:deep(small, .splendor-small) {
    font-size: 0.707em;
}

/* https://github.com/mrmrs/fluidity */

:deep(img, canvas, iframe, video, svg, select, textarea) {
    width: 60%;
    margin-top: 1rem;
    margin-left: auto;
}

@import url(http://fonts.googleapis.com/css?family=Merriweather:300italic,300);

/* === A bit of a gross hack so we can have bleeding divs/blockquotes. */

:deep(
        p,
        *:not(div):not(img):not(body):not(html):not(li):not(blockquote):not(p)
    ) {
    margin: 1rem 0 1rem;
    max-width: 64rem;
    padding: 0.25rem;
}

:deep(div) {
    width: 100%;
}

:deep(div img) {
    width: 100%;
}

:deep(blockquote p) {
    font-size: 1.5rem;
    font-style: italic;
    margin: 1rem auto 1rem;
    max-width: 48rem;
    background: #3f3d3d;
    padding: 0.88rem 2rem;
    border-radius: 10px;
    border: 1px solid #3f3d3d;
}

:deep(ul) {
    list-style-type: disc;
    list-style-position: outside;
}

:deep(ol) {
    list-style-type: decimal-leading-zero;
    list-style-position: outside;
}

:deep(li) {
    margin-left: 2rem;
    font-size: 1.1rem;
}

/* Counteract the specificity of the gross *:not() chain. */

:deep(h1) {
    padding: 4rem 0 !important;
}

/*  === End gross hack */

:deep(p) {
    color: #fcfcfc;
    height: auto;
    line-height: 1.45;
}

:deep(pre, code) {
    font-family: Menlo, Monaco, "Courier New", monospace;
}

:deep(pre) {
    background-color: #3b4252;
    border-radius: 12px;
    font-size: 0.9rem;
    overflow-x: scroll;
    padding: 1.125em;
}

:deep(a, a:visited) {
    color: #3498db;
}

:deep(a:hover, a:focus, a:active) {
    color: #2980b9;
}

:deep(table) {
    border: #2980b9 1px solid;
    margin: 2rem 0;
}
:deep(th) {
    border-bottom: #2980b9 1px solid;
    background-color: #2980b9;
    color: #fcfcfc;
    padding: 0.5rem;
}
:deep(td) {
    border-bottom: #2980b9 1px solid;
    padding: 0.5rem;
    border-right: #3498db 1px solid;
}

:deep(.red) {
    color: #e74c3c;
}

/* Styling for Permalinks */

:deep(.heading-permalink) {
    font-size: 1em;
    vertical-align: baseline;
    text-decoration: none;
    color: transparent;
}

:deep(
        h1:hover .heading-permalink,
        h2:hover .heading-permalink,
        h3:hover .heading-permalink,
        h4:hover .heading-permalink,
        h5:hover .heading-permalink,
        h6:hover .heading-permalink,
        .heading-permalink:hover
    ) {
    text-decoration: none;
    color: #777;
}

:deep(strong[title]) {
    background-color: #3498db;
    position: absolute;
    padding: 1px 5px;
    border-radius: 5px;
}
:deep(strong[title]:hover) {
    background-color: #2980b9;
    color: #fcfcfc;
    rotate: -15deg;
    transition: all 0.3s ease;
}
</style>
