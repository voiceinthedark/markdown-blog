import { onMounted, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./ArticleCard-d8762f95.js";
import { N as NavLink } from "../ssr.js";
import { router } from "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "mermaid";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    articles: Object
  },
  setup(__props) {
    onMounted(() => {
      router.reload();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="text-5xl">Latest Articles</div><div class="grid grid-cols-1 gap-4 mt-6 mr-3 md:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(__props.articles, (article) => {
        _push(`<div class="lg:first:w-[100%] lg:first:col-span-4">`);
        _push(ssrRenderComponent(NavLink, {
          href: "/blog/" + article.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, { article }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1, { article }, null, 8, ["article"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
