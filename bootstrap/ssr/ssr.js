import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, renderSlot, reactive, computed, watch, ref, createTextVNode, unref, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/NavLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bfd8e3cc"]]);
const store = reactive({
  // Store the content of the TOC
  sharedData: null,
  // Store the active heading
  activeHeading: null
});
const SideLayout_vue_vue_type_style_index_0_scoped_de052b3f_lang = "";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/SideLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SideLayout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-de052b3f"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128"
  }, _attrs))}><g fill="#ddd"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconGithub.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconGithub = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const Layout_vue_vue_type_style_index_0_scoped_f28fcd22_lang = "";
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-6" }, _attrs))} data-v-f28fcd22><header class="mt-20 rounded-r-sm lg:min-h-screen" data-v-f28fcd22><div class="top-0 flex flex-col items-start gap-5 px-3 py-6 mb-6 text-2xl lg:sticky" data-v-f28fcd22>`);
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
      _push(ssrRenderComponent(NavLink, {
        href: "/about/",
        active: _ctx.$page.url.startsWith("/about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><article class="min-w-[100%] mx-2 grid grid-cols-1 gap-1 mt-20 lg:col-span-4 mb-28 scroll-smooth" data-v-f28fcd22>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article><aside data-v-f28fcd22>`);
      _push(ssrRenderComponent(SideLayout, { toc: unref(tableOfContents) }, null, _parent));
      _push(`</aside><footer class="w-screen py-12 mt-12 bg-gray-800/50" data-v-f28fcd22><div class="flex items-center justify-center gap-2" data-v-f28fcd22><span data-v-f28fcd22>Copyright © 2023</span><span id="github" class="w-7 h-7" data-v-f28fcd22><a href="https://github.com/voiceinthedark" target="_blank" data-v-f28fcd22>`);
      _push(ssrRenderComponent(IconGithub, null, null, _parent));
      _push(`</a></span></div></footer></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f28fcd22"]]);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const page2 = resolvePageComponent(
        `./Pages/${name}.vue`,
        /* @__PURE__ */ Object.assign({ "./Pages/Blog/Article.vue": () => import("./assets/Article-888b6799.js"), "./Pages/Blog/ArticleCard.vue": () => import("./assets/ArticleCard-d8762f95.js"), "./Pages/Blog/Index.vue": () => import("./assets/Index-eca37194.js"), "./Pages/Blog/Tags/Tag.vue": () => import("./assets/Tag-4a12df74.js"), "./Pages/Blog/Tags/TagItem.vue": () => import("./assets/TagItem-8d17d445.js"), "./Pages/Blog/Tags/TagList.vue": () => import("./assets/TagList-8a0ab39f.js"), "./Pages/Note/Index.vue": () => import("./assets/Index-c5e70d64.js"), "./Pages/Note/Note.vue": () => import("./assets/Note-2e4c417a.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-5217abd0.js") })
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
export {
  Layout as L,
  NavLink as N,
  _export_sfc as _,
  store as s
};
