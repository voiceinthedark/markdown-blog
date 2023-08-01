<template>
    <ul class="flex">
        <li v-for="tag in tags" :key="tag" class="text-white hover:bg-sky-500">
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
    @apply bg-sky-600 text-sm border rounded-md px-3 font-bold py-0 text-white;
    list-style: none;
}
</style>
