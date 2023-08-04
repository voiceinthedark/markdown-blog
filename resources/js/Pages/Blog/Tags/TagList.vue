<template>
    <ul class="flex flex-wrap justify-start gap-1">
        <li v-for="tag in tags" :key="tag">
            <TagItem :tag="tag" />
        </li>
    </ul>
</template>
<script setup>
import TagItem from './TagItem.vue';

defineProps({
    tags: Array
})
</script>

<style scoped>
ul{
    list-style: none;
}
li {
    @apply bg-cyan-600 text-xs border rounded-md px-3 py-1 text-white hover:bg-sky-500;
    list-style: none;
}
</style>
