<template>

        <div class="flex flex-col items-center justify-end mt-20 mr-3 lg:top-0 lg:sticky">
            <span class="text-4xl text-right">A {Coding} Journey</span>
            <div v-if="toc" class="mt-32">
                <div v-html="toc[0].outerHTML"></div>
            </div>
        </div>

</template>
<script setup>
defineProps({
    toc: Object
})

</script>

<style scoped>
:deep(ul) {
    list-style-type: disc;
    list-style-position: inside;
}

:deep(ol) {
    list-style-type: decimal-leading-zero;
    list-style-position: outside;
}

:deep(li) {
    color: #3498db;
    margin-left: 2rem;
    font-size: 1.2rem;
}
:deep(li::marker){
    color: #fff;
}
</style>
