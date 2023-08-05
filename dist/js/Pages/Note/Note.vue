<template>
    <div v-html="note.body"></div>
</template>
<script setup>
import { onMounted, nextTick } from "vue";
import mermaid from "mermaid";

defineProps({
    note: Object
})

onMounted(() => {


    mermaid.init(null, document.querySelectorAll('.mermaid'));
})



function renderMermaid() {
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}

function sanitizeMermaidCode() {
    document
        .querySelectorAll("pre.mermaid, pre>code.language-mermaid")
        .forEach(($el) => {
            // $el.classList.remove("torchlight");
            // if the second selector got a hit, reference the parent <pre>
            if ($el.tagName === "CODE") $el = $el.parentElement;
            // Debug
            console.log(`Sanitizing element: ${$el.outerHTML}`);
            // put the Mermaid contents in the expected <div class="mermaid">
            // plus keep the original contents in a nice <details>
            $el.outerHTML = `
    <div class="mermaid">${$el.textContent}</div>
    <details>
      <summary>Diagram source</summary>
      <pre>${$el.textContent}</pre>
    </details>
  `;
        });
}
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
    color: #3498db;
}

:deep(h1, .splendor-h1) {
    margin-top: 0;
    font-size: 3.698rem;
    color: #3498db;
}

:deep(h2, .splendor-h2) {
    font-size: 2.527rem;
    color: #3498db;
}

:deep(h3, .splendor-h3) {
    font-size: 1.799rem;
    color: #3498db;
}

:deep(h4, .splendor-h4) {
    font-size: 1.214rem;
    color: #3498db;
}

:deep(h5, .splendor-h5) {
    font-size: 1.021rem;
    color: #3498db;
}

:deep(h6, .splendor-h6) {
    font-size: 0.88rem;
    color: #3498db;
}

:deep(small, .splendor-small) {
    font-size: 0.707em;
    color: #3498db;
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

:deep(div img) {
    width: 100%;
}

:deep(blockquote p) {
    font-size: 1.5rem;
    font-style: italic;
    margin: 1rem auto 1rem;
    max-width: 48rem;
    background: #11446e;
    padding: 0.88rem 1.5rem;
    border-radius: 10px;
    border: 1px solid #085563;
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

:deep(pre code.torchlight) {
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

:deep(pre code.torchlight .line) {
    padding-left: 1rem;
    padding-right: 1rem;
}

:deep(pre code.torchlight .line-number, pre code.torchlight .summary-caret) {
    margin-right: 1rem;
}

/*
  Blur and dim the lines that don't have the `.line-focus` class,
  but are within a code block that contains any focus lines.
*/

:deep(.torchlight.has-focus-lines .line:not(.line-focus)) {
    transition: filter 0.35s, opacity 0.35s;
    filter: blur(0.095rem);
    opacity: 0.65;
}

/*
  When the code block is hovered, bring all the lines into focus.
*/

:deep(.torchlight.has-focus-lines:hover .line:not(.line-focus)) {
    filter: blur(0px);
    opacity: 1;
}

:deep(.table-of-contents) {
    @apply mb-20 mt-6;
}
</style>
