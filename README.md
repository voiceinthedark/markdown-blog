# Markdown driven Blog

## Description
This is a personal blog, using [Inertia](https://inertiajs.com) over [Laravel](https://laravel.com) with [Vue](https://vuejs.org) for the frontend and [Mermaid](https://mermaid-js.github.io/mermaid/#/) as a diagraming tool.

Main inspiration from this [article by *Stef*](https://codingwithstef.com/2021-01-17-creating-a-markdown-driven-blog-using-laravel-8).

It is file-driven, so you can use [Markdown](https://en.wikipedia.org/wiki/Markdown) to write your blog posts. without resorting to a database.

It is part of a series of projects, that I am working on, using Vue, Laravel, Php, Inertia, Livewire, Alpinejs and Nuxt.

## Usage
- Blog posts should be placed in the ```resources/views/articles``` folder. Inside a year folder.
    The filesystem will scan for markdown files.
- Notes should be placed in the ```resources/views/notes``` folder. The filesystem will scan for markdown files.
- Images should be placed in the ```public/images``` folder. and can be referenced from the markdown files.

## Acknowledgment
- [Torchlight](https://torchlight.dev/) for the syntax highlight
- [Mermaid](https://mermaid-js.github.io/mermaid/) for diagraming

## Timeline
```mermaid
%%{init : {'theme':'neutral'}}%%
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
```
