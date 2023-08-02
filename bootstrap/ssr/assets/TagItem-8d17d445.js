import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "TagItem",
  __ssrInlineRender: true,
  props: {
    tag: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_Link, mergeProps({
        href: "/blog/tags/" + __props.tag
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}>${ssrInterpolate(__props.tag)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, toDisplayString(__props.tag), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Tags/TagItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
