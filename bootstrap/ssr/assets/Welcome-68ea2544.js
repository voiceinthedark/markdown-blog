import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "mermaid";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><div class="flex items-center gap-4 font-display"><span class="text-6xl"><span class="text-sky-600">{</span>Coding<span class="text-emerald-600">}</span> with <span class="text-sky-500">Firas</span></span><svg width="42px" height="42px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFA1E0" d="M440.978 323.425c3.819-14.914 5.852-30.544 5.852-46.649c0-103.524-83.926-187.46-187.46-187.46c-22.642 0-44.346 4.014-64.439 11.37c-39.597-53.207-108.116-71.15-117.883-62.258c-13.158 11.98-32.999 74.787-5.471 141.8c3.49 8.496 8.713 16.362 15.139 23.411c-9.532 22.473-14.806 47.189-14.806 73.136c0 16.106 2.033 31.735 5.852 46.649c-6.345 11.508-9.789 23.817-9.789 36.614c0 63.903 49.429 115.707 191.397 115.707s191.397-51.804 191.397-115.707c0-12.796-3.444-25.106-9.789-36.613z"></path><path fill="#FFC7EF" d="M259.37 299.192c-80.334 0-99.93 33.493-99.93 74.808c0 41.316 19.596 74.808 99.93 74.808S359.3 415.316 359.3 374c0-41.315-19.595-74.808-99.93-74.808z"></path><path fill="#E583C9" d="M228.347 366.537c0 14.532-7.888 26.312-17.617 26.312s-17.617-11.78-17.617-26.312s7.888-26.312 17.617-26.312s17.617 11.78 17.617 26.312zm79.664-26.312c-9.73 0-17.617 11.78-17.617 26.312s7.888 26.312 17.617 26.312s17.617-11.78 17.617-26.312s-7.888-26.312-17.617-26.312z"></path><path fill="#2B3B47" d="M376.812 230.085V271.805c0 13.985-11.337 25.321-25.321 25.321s-25.321-11.337-25.321-25.321V230.085c0-13.985 11.337-25.321 25.321-25.321s25.321 11.336 25.321 25.321zM167.25 204.763c-13.985 0-25.321 11.337-25.321 25.321V271.804c0 13.985 11.337 25.321 25.321 25.321s25.321-11.337 25.321-25.321v-41.719c0-13.985-11.337-25.322-25.321-25.322zm43.48 144.092c-9.73 0-17.617 11.78-17.617 26.312s7.888 26.312 17.617 26.312s17.617-11.78 17.617-26.312s-7.887-26.312-17.617-26.312zm97.281 0c-9.73 0-17.617 11.78-17.617 26.312s7.888 26.312 17.617 26.312s17.617-11.78 17.617-26.312s-7.888-26.312-17.617-26.312z"></path><path fill="#E583C9" d="M93.158 182.158c-20.737-50.48-9.529-93.588.383-102.612c6.398-5.825 46.27 3.638 76.174 32.563c-31.392 17.129-57.338 42.974-74.602 74.281a57.871 57.871 0 0 1-1.955-4.232zm335.801 14.663c12.297-13.871 28.025-49.209 38.205-68.102c0 0-30.307-15.857-66.709-46.109c-18.014-14.971-27.164-24.931-63.187 23.616c40.232 18.406 72.814 50.628 91.691 90.595z"></path><path fill="#FFA1E0" d="M359.3 81.64c71.309-5.37 65.299 64.754 65.628 88.668c0 0 52.798-6.458 53.367-28.893S422.704 19.681 359.3 81.64z"></path></svg></div><div class="p-4 mt-16 border-4 border-separate border-dashed rounded-md border-sky-600 border-spacing-12 w-fit"><a href="https://roadmap.sh"><img src="https://api.roadmap.sh/v1-badge/wide/6480671d40cee644b288e84b?variant=dark" alt="roadmap.sh"></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Welcome as default
};
