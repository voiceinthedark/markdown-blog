<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">

    @vite('resources/js/app.js', 'resources/css/app.css')
    @inertiaHead
</head>

<body class="text-white bg-gray-900">
    @inertia

    {{-- <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
    </script> --}}
    <script>
        // MERMAID_CONFIG = {
        // startOnLoad: true
        // }

        // if (window['MERMAID_CONFIG']) {
        //     window['MERMAID_CONFIG'].startOnLoad = false
        //     window['MERMAID_CONFIG'].cloneCssStyles = false
        //     window['MERMAID_CONFIG'].theme = "default"
        // }
        // mermaid.initialize(window['MERMAID_CONFIG'] || {})
        // if (typeof(window['Reveal']) !== 'undefined') {
        //     function mermaidRevealHelper(event) {
        //         var currentSlide = event.currentSlide
        //         var diagrams = currentSlide.querySelectorAll('.mermaid');
        //         for (var i = 0; i < diagrams.length; i++) {
        //             var diagram=diagrams[i];
        //             if (!diagram.hasAttribute('data-processed')) {
        //                 mermaid.init(null, diagram, ()=> {
        //                 Reveal.slide(event.indexh, event.indexv)
        //                 });
        //             }
        //         }
        //     }
        //     Reveal.addEventListener('slidechanged', mermaidRevealHelper)
        //     Reveal.addEventListener('ready', mermaidRevealHelper)
        //     } else {
        //     mermaid.init(null, document.querySelectorAll('.mermaid'))
        //     }
    </script>

</body>

</html>
