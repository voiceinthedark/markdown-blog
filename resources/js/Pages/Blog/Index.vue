<template>
    <section>
        <div class="text-5xl">Latest Articles</div>
        <div class="grid grid-cols-1 gap-4 mt-6 mr-3 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="article in articles" :key="article.id" class="lg:first:w-[100%] lg:first:col-span-4">
                <ArticleCard :article="article" />
            </div>
        </div>

    </section>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';

defineProps({
    articles: Object
})
</script>

<style scoped>

</style>

