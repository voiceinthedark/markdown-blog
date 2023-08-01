<template>
    <ul class="flex flex-col gap-1 mt-20">
        <li v-for="note in notes" :key="note.id">
            <Link :href="'/note/' + note.id">
                {{ note.meta.title }}
            </Link>
        </li>
    </ul>
</template>

<script setup>
import Note from './Note.vue';
defineProps({
    notes: Array,
});
</script>
<style scoped>
li {
    @apply text-lg font-bold text-blue-400 w-fit;
    list-style: inside;
}
li::marker{
    content: "#";
    font-size: 1.2rem;
    color: #9a9a9a;
}
</style>
