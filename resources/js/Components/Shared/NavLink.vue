<template>
    <Link class="font-bold hover:underline"
    :class="{ 'bg-gray-200 rounded-md px-4 py-2': active }"
    ><slot /></Link>
</template>

<script setup>
defineProps({
    active: Boolean
})
</script>
