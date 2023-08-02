import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    article: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[16rem] min-w-[100%] max-w-sm mx-2 rounded-md shadow-md lg:w-64 bg-sky-700/50" }, _attrs))}><div><img class="rounded-t-lg w-[100%]"${ssrRenderAttr("src", __props.article.meta.image)} alt="article cover"></div><div class="p-4"><div class="text-xl font-bold">${ssrInterpolate(__props.article.meta.title)}</div><div class="text-sm text-gray-200">${ssrInterpolate(__props.article.meta.description)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/ArticleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
