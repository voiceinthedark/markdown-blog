import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./TagItem-8d17d445.js";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
const TagList_vue_vue_type_style_index_0_scoped_1be7734a_lang = "";
const _sfc_main = {
  __name: "TagList",
  __ssrInlineRender: true,
  props: {
    tags: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap justify-start gap-1" }, _attrs))} data-v-1be7734a><!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(`<li data-v-1be7734a>`);
        _push(ssrRenderComponent(_sfc_main$1, { tag }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Tags/TagList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TagList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1be7734a"]]);
export {
  TagList as default
};
