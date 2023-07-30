import { reactive } from 'vue'

export const store = reactive({
    // Store the content of the TOC
    sharedData: null,
    // Store the active heading
    activeHeading: null,
})
