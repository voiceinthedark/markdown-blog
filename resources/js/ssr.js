import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Layout from "./Layouts/Layout.vue";
import mermaid from "mermaid";

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            // set default layout
            const page = resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob("./Pages/**/*.vue")
            );
            page.then((component) => {
                component.default.layout = component.default.layout || Layout;
            });
            return page;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            }).use(plugin);
        },
    })
);

mermaid.initialize({ startOnLoad: true });
