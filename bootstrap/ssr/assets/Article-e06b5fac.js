import { onMounted, onUnmounted, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc, s as store } from "../ssr.js";
import TagList from "./TagList-b2c5a934.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "mermaid";
import "./TagItem-8d17d445.js";
const Article_vue_vue_type_style_index_0_scoped_edd2140a_lang = "";
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
      return new Date(date).toLocaleDateString("en-GB", options);
    }
    function extractTOC(article) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(article.body, "text/html");
      let toc = doc.querySelectorAll(".table-of-contents");
      store.sharedData = toc && toc.length > 0 ? toc.item(0).outerHTML : "";
      handleMermaidCharts(doc);
    }
    onMounted(() => {
      extractTOC(props.article);
      window.addEventListener("scroll", handleScroll);
      const tocHead = document.querySelector(".table-of-contents");
      if (tocHead) {
        tocHead.querySelectorAll("a").forEach((a) => {
          a.addEventListener("click", handleTocClick);
        });
      }
      router.reload();
    });
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
          console.log(chart);
          if (chart.getAttribute("data-lang") === "mermaid") {
            chart.className = "mermaid";
            chart.classList.add("mermaid");
            chart.classList.remove("torchlight");
          }
        });
      }
      return;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mb-40 gap-9 scroll-smooth" }, _attrs))} data-v-edd2140a><div data-v-edd2140a><img${ssrRenderAttr("src", __props.article.meta.image)} class="w-full rounded-md shadow-md" alt="cover image" data-v-edd2140a></div><div class="flex justify-between" data-v-edd2140a><span class="text-sm text-gray-300" data-v-edd2140a>${ssrInterpolate(formatDate(__props.article.meta.published_at * 1e3))}</span>`);
      _push(ssrRenderComponent(TagList, {
        tags: __props.article.tags
      }, null, _parent));
      _push(`</div><div class="text-2xl text-blue-400 lg:text-7xl" data-v-edd2140a>${ssrInterpolate(__props.article.meta.title)}</div><div data-v-edd2140a>${__props.article.body}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-edd2140a"]]);
export {
  Article as default
};
