import { onMounted, nextTick, onUnmounted, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc, s as store } from "../ssr.js";
import TagList from "./TagList-8a0ab39f.js";
import mermaid from "mermaid";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "./TagItem-8d17d445.js";
const Article_vue_vue_type_style_index_0_scoped_cb86aed2_lang = "";
const _sfc_main = {
  __name: "Article",
  __ssrInlineRender: true,
  props: {
    article: Object
  },
  setup(__props) {
    const props = __props;
    function formatDate(date) {
      const options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short"
      };
      if (typeof date === "string") {
        date = new Date(date);
      } else {
        date *= 1e3;
      }
      return new Date(date).toLocaleDateString("en-GB", options);
    }
    function extractTOC(article) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(article.body, "text/html");
      let toc = doc.querySelectorAll(".table-of-contents");
      store.sharedData = toc && toc.length > 0 ? toc.item(0).outerHTML : "";
    }
    onMounted(async () => {
      extractTOC(props.article);
      window.addEventListener("scroll", handleScroll);
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
        startOnLoad: true
      });
      console.log("loaded mermaid");
      nextTick(() => {
        sanitizeMermaidCode();
        mermaid.initialize({
          startOnLoad: true
        });
        renderMermaid();
      });
      mermaid.init(null, document.querySelectorAll(".mermaid"));
    });
    function renderMermaid() {
      mermaid.init(void 0, document.querySelectorAll(".mermaid"));
    }
    function sanitizeMermaidCode() {
      document.querySelectorAll("pre.mermaid, pre>code.language-mermaid").forEach(($el) => {
        $el.classList.remove("torchlight");
        if ($el.tagName === "CODE")
          $el = $el.parentElement;
        console.log(`Sanitizing element: ${$el.outerHTML}`);
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
    router.on("before", (event) => {
      store.sharedData = [];
    });
    let activeHeading = ref("");
    function handleScroll() {
      const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
      let active = "";
      for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          active = heading.firstElementChild.id;
        }
        heading.querySelector("a").addEventListener("click", handleHeadingClick);
      }
      activeHeading.value = active;
      store.activeHeading = active;
    }
    function handleHeadingClick(e) {
      e.preventDefault();
      window.scrollTo({
        top: e.target.offsetTop,
        behavior: "smooth"
      });
    }
    function handleTocClick(e) {
      e.preventDefault();
      const header = document.querySelector(
        'a[id="' + e.target.href.split("#")[1] + '"]'
      );
      if (header) {
        window.scrollTo({
          top: header.offsetTop,
          behavior: "smooth"
        });
      }
    }
    function handleMermaidCharts(docParser) {
      let mermaidCharts = docParser.querySelectorAll("code");
      if (mermaidCharts && mermaidCharts.length > 0) {
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mb-40 gap-9 scroll-smooth" }, _attrs))} data-v-cb86aed2><div data-v-cb86aed2><img${ssrRenderAttr("src", __props.article.meta.image)} class="w-full rounded-md shadow-md" alt="cover image" data-v-cb86aed2></div><div class="flex justify-between" data-v-cb86aed2><span class="text-sm text-gray-300" data-v-cb86aed2>${ssrInterpolate(formatDate(__props.article.meta.published_at))}</span>`);
      _push(ssrRenderComponent(TagList, {
        tags: __props.article.tags
      }, null, _parent));
      _push(`</div><div class="text-2xl text-sky-600 lg:text-6xl" data-v-cb86aed2>${ssrInterpolate(__props.article.meta.title)}</div>`);
      if (parseInt(__props.article.meta.published_at) < parseInt(__props.article.meta.updated_at)) {
        _push(`<span class="px-2 py-1 text-sm text-white bg-red-500" data-v-cb86aed2>Article last updated on: ${ssrInterpolate(formatDate(__props.article.meta.updated_at))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-cb86aed2>${__props.article.body}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb86aed2"]]);
export {
  Article as default
};
