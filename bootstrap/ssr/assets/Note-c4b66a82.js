import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "mermaid";
const Note_vue_vue_type_style_index_0_scoped_b4eea795_lang = "";
const _sfc_main = {
  __name: "Note",
  __ssrInlineRender: true,
  props: {
    note: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b4eea795>${__props.note.body}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Note/Note.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Note = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4eea795"]]);
export {
  Note as default
};
