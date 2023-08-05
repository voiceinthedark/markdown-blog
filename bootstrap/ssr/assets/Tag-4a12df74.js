import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./ArticleCard-d8762f95.js";
import { L as Layout } from "../ssr.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: [Layout]
}, {
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    articles: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      ssrRenderList(__props.articles, (article) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Link, {
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Tags/Tag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
