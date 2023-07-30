<template>
    <section>
        <div class="text-5xl">Latest Articles</div>
        <div class="grid grid-cols-1 gap-4 mt-6 mr-3 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="article in articles" :key="article.id" class="lg:first:w-[100%] lg:first:col-span-4">
                <NavLink :href="'/blog/' + article.slug" >
                    <ArticleCard :article="article" />
                </NavLink>
            </div>
        </div>

    </section>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
import NavLink from '../../Components/Shared/NavLink.vue'

defineProps({
    articles: Object
})

</script>

<style scoped>

</style>

