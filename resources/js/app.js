import '../css/app.css';
import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Layout from './Layouts/Layout.vue';
import mermaid from 'mermaid';

createInertiaApp({
    resolve: (name) =>
    {// set default layout
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        );
        page.then((component) => {
            component.default.layout = component.default.layout || Layout;
        });
        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el);
    },
    title: (title) => (title ? `${title} - Markdown Blog` : "Markdown Blog"),
});

const config = {
    theme: "default",
    logLevel: "error",
    securityLevel: "loose",
    startOnLoad: true,
    arrowMarkerAbsolute: false,

    er: {
        diagramPadding: 20,
        layoutDirection: "TB",
        minEntityWidth: 100,
        minEntityHeight: 75,
        entityPadding: 15,
        stroke: "gray",
        fill: "honeydew",
        fontSize: 12,
        useMaxWidth: true,
    },
    flowchart: {
        diagramPadding: 8,
        htmlLabels: true,
        curve: "basis",
    },
    sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        messageAlign: "center",
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true,
        rightAngles: false,
        showSequenceNumbers: false,
    },
    gantt: {
        titleTopMargin: 25,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        leftPadding: 75,
        gridLineStartPadding: 35,
        fontSize: 11,
        fontFamily: '"Open Sans", sans-serif',
        numberSectionStyles: 4,
        axisFormat: "%Y-%m-%d",
        topAxis: false,
        displayMode: "",
    },
};
mermaid.initialize(config);
