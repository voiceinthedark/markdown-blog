<template>
    <section>
        <div class="text-5xl">Latest Articles</div>
        {{ articles }}

    </section>
</template>

<script setup>
defineProps({
    articles: Object
})
</script>

