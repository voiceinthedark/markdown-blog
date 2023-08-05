<template>
    <div v-for="article in articles" :key="article.id">
        <Link :href="'/blog/' + article.slug">
            <ArticleCard :article="article" />
        </Link>
    </div>
</template>

<script setup>
import ArticleCard from '../ArticleCard.vue'
import Layout from '../../../Layouts/Layout.vue';

defineProps({
    articles: Array
})
defineOptions({
    layout: [Layout]
})
</script>
