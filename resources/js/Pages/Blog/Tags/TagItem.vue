<template>
    <Link :href="'/blog/tags/' + tag"><span class="text-white">{{ tag }}</span></Link>
</template>

<script setup>
const props = defineProps({
    tag: String,
});
</script>

<style scoped>

</style>
