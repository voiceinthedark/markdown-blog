import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, renderSlot, reactive, computed, watch, ref, createTextVNode, unref, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from "vue/server-renderer";
import mermaid from "mermaid";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const NavLink_vue_vue_type_style_index_0_scoped_bfd8e3cc_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_Link, mergeProps({
        class: ["ml-4 font-bold", { active: __props.active }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/NavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bfd8e3cc"]]);
const store = reactive({
  // Store the content of the TOC
  sharedData: null,
  // Store the active heading
  activeHeading: null
});
const SideLayout_vue_vue_type_style_index_0_scoped_de052b3f_lang = "";
const _sfc_main$1 = {
  __name: "SideLayout",
  __ssrInlineRender: true,
  props: {
    toc: Object
  },
  setup(__props) {
    const data = __props;
    const processedToc = computed(() => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.toc, "text/html");
      const headings = doc.querySelectorAll("a");
      headings.forEach((heading) => {
        heading.addEventListener("click", handleHeadingClick);
      });
      return doc.body.innerHTML;
    });
    function handleHeadingClick(e) {
      console.log("object", e.target);
      e.preventDefault();
      window.scrollTo({
        top: e.target.offsetTop,
        behavior: "smooth"
      });
    }
    watch(
      () => store.activeHeading,
      (activeHeading) => {
        if (activeHeading) {
          const currentAside = document.querySelector("aside");
          const headings = currentAside.querySelector(".table-of-contents").querySelectorAll("a");
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-end mt-20 mr-3 lg:top-0 lg:sticky scroll-smooth" }, _attrs))} data-v-de052b3f><span class="font-mono text-4xl text-center" data-v-de052b3f>A <span class="text-sky-400" data-v-de052b3f>{</span>Coding<span class="text-emerald-500" data-v-de052b3f>}</span> <span class="underline" data-v-de052b3f>Journey</span></span>`);
      if (__props.toc && __props.toc.length > 0) {
        _push(`<div class="mt-32" data-v-de052b3f><div data-v-de052b3f>${processedToc.value}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/SideLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SideLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-de052b3f"]]);
const Layout_vue_vue_type_style_index_0_scoped_8eb151ac_lang = "";
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    let tableOfContents = ref(null);
    watch(
      () => store.sharedData,
      (newVal) => {
        tableOfContents.value = newVal;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-6" }, _attrs))} data-v-8eb151ac><header class="mt-20 rounded-r-sm lg:min-h-screen" data-v-8eb151ac><div class="top-0 flex flex-col items-start gap-1 px-3 py-6 mb-6 text-2xl lg:sticky" data-v-8eb151ac>`);
      _push(ssrRenderComponent(NavLink, {
        href: "/",
        active: _ctx.$page.url === "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavLink, {
        href: "/blog/",
        active: _ctx.$page.url.startsWith("/blog")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(NavLink, {
        href: "/note/",
        active: _ctx.$page.url.startsWith("/note")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Notes`);
          } else {
            return [
              createTextVNode("Notes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><article class="min-w-[100%] mx-2 grid grid-cols-1 gap-1 mt-20 lg:col-span-4 mb-28 scroll-smooth" data-v-8eb151ac>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article><aside data-v-8eb151ac>`);
      _push(ssrRenderComponent(SideLayout, { toc: unref(tableOfContents) }, null, _parent));
      _push(`</aside></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8eb151ac"]]);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const page2 = resolvePageComponent(
        `./Pages/${name}.vue`,
        /* @__PURE__ */ Object.assign({ "./Pages/Blog/Article.vue": () => import("./assets/Article-e06b5fac.js"), "./Pages/Blog/ArticleCard.vue": () => import("./assets/ArticleCard-d8762f95.js"), "./Pages/Blog/Index.vue": () => import("./assets/Index-883e9909.js"), "./Pages/Blog/Tags/Tag.vue": () => import("./assets/Tag-ac516f30.js"), "./Pages/Blog/Tags/TagItem.vue": () => import("./assets/TagItem-8d17d445.js"), "./Pages/Blog/Tags/TagList.vue": () => import("./assets/TagList-b2c5a934.js"), "./Pages/Note/Index.vue": () => import("./assets/Index-033ea8cf.js"), "./Pages/Note/Note.vue": () => import("./assets/Note-c4b66a82.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-68ea2544.js") })
      );
      page2.then((component) => {
        component.default.layout = component.default.layout || Layout;
      });
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
mermaid.initialize({ startOnLoad: true });
export {
  Layout as L,
  NavLink as N,
  _export_sfc as _,
  store as s
};
