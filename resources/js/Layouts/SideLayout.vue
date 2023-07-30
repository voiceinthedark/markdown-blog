<template>
    <aside>
        <div class="flex flex-col items-center justify-end mt-20 mr-3">
            <span class="text-4xl text-right">A {Coding} Journey</span>
            <div v-if="toc" class="mt-32">
                <div v-html="toc"></div>
            </div>
        </div>
    </aside>
</template>
<script setup>
defineProps({
    toc: Object
})

</script>
