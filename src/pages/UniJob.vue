<template>
    <div>
        <h1 class="head-text">Check these jobs at universities</h1>
        <div class="uni-cards-layout">
            <UniCard v-for="uni in unis" :key="uni" :label="uni" />
            <UniCard class="last-unicard" key="ongoing" label="ongoing..." />
        </div>

    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UniCard from '../components/UniCard.vue';

let unis = ref(['ethz', 'epfl', 'uzh', 'unibe', 'tue', 'tud', 'kul', 'kth', 'cth'])

onMounted(() => {
    document.title = 'University Opportunities';
    
});
</script>

<style scoped>
.head-text {
    text-align: center;
    font-size: 2.5em;
    font-family: 'Roboto', sans-serif;
    color: #00DC82;
    margin-top: 2em;
    margin-bottom: 2em;
}
.uni-cards-layout {
    display: grid;
    width: 80%;
    height: 70vh;
    overflow: auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    place-items: center;
}

.last-unicard {
    filter: invert(40%);
}

.last-unicard:hover {
    filter: invert(10%) brightness(1.5);
}

.uni-cards-layout::-webkit-scrollbar {
    width: 8px; /* Width of the vertical scrollbar */
    height: 8px; /* Height of the horizontal scrollbar */
}



.uni-cards-layout::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scroll thumb */
    border-radius: 4px; /* Radius of the scroll thumb */
}

.uni-cards-layout::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scroll thumb when hovering */
}
</style>
