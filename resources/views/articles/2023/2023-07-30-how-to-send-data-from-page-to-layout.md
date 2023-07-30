---
title: How To Send data from a Vue Page to a persistent Layout
published_at: 2023-07-30T00:39:00+03:00
updated_at: 2023-07-30T00:39:00+00:30
type: art
description: How to send data from a vue page to a persistent layout in Laravel + inertiajs
link: /2023/2023-07-30-how-to-send-data-from-page-to-layout
image: 
tags: [vue, inertia, laravel, php, blog]
---

## The Problem

During development of my personal blog, I wanted to send data from my 
vue Page to the persistent layout of my entire site. 
  The problem here is that my vue page is not a traditional parent-child component; 
rather due to my choice of a persistent layout instead of a default layout, 
the layout is decoupled naturally, from the rest of the Pages on my site, 
which reside in the dedicated default slot of my Layout.

Typically my layout is persistent through the main configuration of inertia:


**app.js**{: title="app.js"}
```javascript
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
});
```
There is no way to interact with the persistent layout from the vue page, since they are decoupled.
This is intentional, since this allows the layout and the pages to be rendered independently.








