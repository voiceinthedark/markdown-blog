<template>
    <ul class="flex flex-col gap-1 mt-20">
        <li v-for="note in notes" :key="note">{{ note.meta.title }}</li>
    </ul>
</template>

<script setup>
defineProps({
    notes: Array
})
</script>
<style scoped>
li{
    @apply text-lg font-bold text-blue-400 w-fit;
    list-style: none;
}
</style>
