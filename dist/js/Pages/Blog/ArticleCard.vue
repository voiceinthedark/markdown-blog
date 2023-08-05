<template>
    <div class="min-h-[16rem] min-w-[100%] max-w-sm mx-2 rounded-md shadow-md lg:w-64 bg-sky-700/50">
        <div><img class="rounded-t-lg w-[100%]" :src="article.meta.image" alt="article cover" ></div>
        <div class="p-4">
            <div class="text-xl font-bold">{{ article.meta.title }}</div>
            <div class="text-sm text-gray-200">{{ article.meta.description }}</div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    article: Object,
});
</script>
