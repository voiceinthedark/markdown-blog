<template>
    <Link class="ml-4 font-bold"
    :class="{ active : active }"
    ><slot /></Link>
</template>

<script setup>
defineProps({
    active: Boolean
})
</script>

<style scoped>
.active {
    @apply bg-sky-600 rounded-md px-4;
    transition: all 0.1s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

a:hover {
    @apply bg-sky-600 rounded-md ;
    transition: all 0.3s ease;
}
</style>
