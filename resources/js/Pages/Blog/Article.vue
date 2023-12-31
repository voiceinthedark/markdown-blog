<template #default>
    <div class="flex flex-col mb-40 gap-9 scroll-smooth">
        <div>
            <img
                :src="article.meta.image"
                class="w-full rounded-md shadow-md"
                alt="cover image"
            />
        </div>
        <div class="flex justify-between">
            <span class="text-sm text-gray-300">{{
                formatDate(article.meta.published_at)
            }}</span>
            <TagList :tags="article.tags" />
        </div>
        <div class="text-2xl text-sky-600 lg:text-6xl">
            {{ article.meta.title }}
        </div>
        <template v-if="parseInt(article.meta.published_at) < parseInt(article.meta.updated_at)">
            <span class="px-2 py-1 text-sm text-white bg-red-500">Article last updated on: {{ formatDate(article.meta.updated_at) }}</span>
        </template>
        <div v-html="article.body"></div>
    </div>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { store } from "../../stores/useSharedStore";
import TagList from "./Tags/TagList.vue";
import mermaid from "mermaid";
// defineOptions({
//     layout: [Layout],
//     name: "TableOfContent",
// });

const props = defineProps({
    article: Object,
});

/**
 * Formats a given date into a localized string representation.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
function formatDate(date) {
    const options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
    };
    // if date is a string, parse it into a Date object.
    if (typeof date === "string") {
        date = new Date(date);
    }else{
        date *= 1000;
    }

    return new Date(date).toLocaleDateString("en-GB", options);
}
// This function extracts the table of contents (TOC) from an article.
function extractTOC(article) {
    // Create a DOMParser object to parse the article's body as HTML.
    let parser = new DOMParser();

    // Parse the article's body as HTML and store the resulting document in the 'doc' variable.
    let doc = parser.parseFromString(article.body, "text/html");

    // Select all elements with the class 'table-of-contents' from the parsed document and store them in the 'toc' variable.
    let toc = doc.querySelectorAll(".table-of-contents");

    // Store the table of contents in the sharedData property of the store object.
    store.sharedData = toc && toc.length > 0 ? toc.item(0).outerHTML : "";
    // console.log(store.sharedData);
}


onMounted(async () => {
    extractTOC(props.article);
    // Handle scroll event
    window.addEventListener("scroll", handleScroll);
    // Handle smooth scroll on TOC click
    const tocHead = document.querySelector(".table-of-contents");
    if (tocHead) {
        tocHead.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", handleTocClick);
        });
    }

    let parser = new DOMParser();
    let doc = parser.parseFromString(props.article.body, "text/html");
    handleMermaidCharts(doc);
    sanitizeMermaidCode();
    renderMermaid();
    mermaid.initialize({
        startOnLoad: true,
    });
    console.log("loaded mermaid");

    nextTick(() => {
        sanitizeMermaidCode();
        mermaid.initialize({
            startOnLoad: true,
        });
        renderMermaid();
        // console.log("nexttick");
        });

    // await mermaid.run();
    mermaid.init(null, document.querySelectorAll('.mermaid'));


    // router.reload();
});

/**
 * Renders the Mermaid diagrams on the page.
 *
 * @param {undefined} undefined - The first parameter is not used.
 * @param {NodeList} document.querySelectorAll(".mermaid") - The second parameter is a NodeList of elements with the class "mermaid".
 * @return {undefined} This function does not return any value.
 */
function renderMermaid() {
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}

/**
 * Sanitizes the Mermaid code by removing the "torchlight" class from the
 * elements with the classes "mermaid" or "language-mermaid". If the element
 * has the class "language-mermaid", it references the parent <pre> element.
 * The function then puts the Mermaid contents in a <div> element with the
 * class "mermaid" and keeps the original contents in a <details> element.
 *
 * @param {type} $el - the element to be sanitized
 * @return {type} undefined
 */
function sanitizeMermaidCode() {
    document
        .querySelectorAll("pre.mermaid, pre>code.language-mermaid")
        .forEach(($el) => {
            $el.classList.remove("torchlight");
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

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

/* when user leave the page reset the TOC to empty
 */
router.on("before", (event) => {
    store.sharedData = [];
});

let activeHeading = ref("");

// When the user moves through the documents, scroll the table of contents.
function handleScroll() {
    // capture the headings
    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    let active = "";

    for (const heading of headings) {
        // console.log(heading.textContent);
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
            // get the active heading href attribute value
            active = heading.firstElementChild.id;
        }
        // console.log(heading);
        // Add smooth scrolling through TOC click
        heading
            .querySelector("a")
            .addEventListener("click", handleHeadingClick);
    }
    activeHeading.value = active;
    store.activeHeading = active;
}

/**
 * Handles the click event on a heading element.
 *
 * @param {Event} e - The click event object.
 * @return {undefined} This function does not return a value.
 */
function handleHeadingClick(e) {
    e.preventDefault();
    window.scrollTo({
        top: e.target.offsetTop,
        behavior: "smooth",
    });
}

/**
 * Handles the click event on the table of contents.
 *
 * @param {Event} e - The click event object.
 * @return {void} This function does not return any value.
 */
function handleTocClick(e) {
    e.preventDefault();
    // console.log(e.target.href.split('#')[1]);
    const header = document.querySelector(
        'a[id="' + e.target.href.split("#")[1] + '"]'
    );
    // console.log(header);
    if (header) {
        // console.log(header);
        window.scrollTo({
            top: header.offsetTop,
            behavior: "smooth",
        });
    }
}

// capture a mermaid chart in the on <pre></pre> or <code></code>
function handleMermaidCharts(docParser) {
    let mermaidCharts = docParser.querySelectorAll("code");
    if (mermaidCharts && mermaidCharts.length > 0) {
        // console.log(mermaidCharts);
        mermaidCharts.forEach((chart) => {
            if (chart.getAttribute("data-lang") === "mermaid") {
                console.log(chart);
                chart.className = "mermaid";
                chart.classList.add("mermaid");
                chart.classList.remove("torchlight");
            }
        });
    }
    return;
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
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-style: italic;
    margin: 1rem auto 1rem;
    max-width: 48rem;
    background: #1073c4;
    padding: 0.88rem 1.5rem;
    border-radius: 10px;
    border: 1px solid #000000;
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

:deep(.torchlight.has-focus-lines .line:not(.line-focus)) {
    transition: filter 0.35s, opacity 0.35s;
    filter: blur(0.095rem);
    opacity: 0.65;
}

</style>
