import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
const Index_vue_vue_type_style_index_0_scoped_b562ddc7_lang = "";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    notes: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-1 my-20" }, _attrs))} data-v-b562ddc7><!--[-->`);
      ssrRenderList(__props.notes, (note) => {
        _push(`<li data-v-b562ddc7>`);
        _push(ssrRenderComponent(_component_Link, {
          href: "/note/" + note.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(note.meta.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(note.meta.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Note/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b562ddc7"]]);
export {
  Index as default
};
