---
title: Markdown Blog Timeline
published_at: 2023-08-01T16:53:00+03:00
updated_at: 2023-08-01T16:53:00+03:00
type: note
description: timeline for the markdown blog project
link: markdown-blog.md
image: 
tags: [blog, markdown, timeline]
---

# Markdown Blog Timeline

<pre class="bg-white mermaid">
gantt
    title Markdown-blog
    dateFormat YYYY-MM-DD
    section Design
        Design layout   :done,a1, 2023-07-28, 1d
        integrate vue and laravel    :done,a2, 2023-07-28, 1d
        Fix transition problems :active,a3, 2023-08-01,2d
    section Markdown
        Collect .md to display :done,2023-07-29, 2d
        Design main page    :done,b1,2023-07-29, 2d
        Blog Page :done,b2,2023-07-29, 2d
        Commonmark :done,after b1,2023-07-30, 1d
        Readme :after d3,2023-08-02, 2d
        TimeLine&Notes:active,b4,2023-08-01, 3d
    section Style
        extract TOC :done, c1,2023-07-30,1d
        Add Mermaid support :done, after c1,2023-07-31, 1d
    section Features
        Extract tags from article :done,d1,2023-07-31,1d
        Add category listing :done,d2,2023-07-31,2d
        Pagination :d3,2023-08-01,3d
    section Deployment
        Build & Deploy :e1,2023-08-03,2d
</pre>
