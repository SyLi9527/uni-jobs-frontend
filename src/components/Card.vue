<template>
    <div class="card-container">
        <div class="card">
            <h2 class="card-title">{{ title }}</h2>
            <br />
            <p class="card-content">{{ content }}</p>
            <br />
            <!-- <div class="card-link">
                <span>Go</span>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    title: String,
    content: String,
});

</script>

<style scoped>
/* Navbar styles go here */
.card-container {
    position: relative;
    background: transparent;
    width: 18em;
    height: 25em;
    border-radius: 1em;
}

.card-container:hover {
    background: #00DC82 !important;
    cursor: pointer;
}

.card {
    position: absolute;
    inset: 2px;
    padding: 1.5em;
    border-radius: 1em;
    border: transparent 0.5px solid;
    background-color: rgb(9, 17, 29); 
}

.card-title {
    font-size: 1.3em;
    font-weight: 700;
    color: #ffffff;
    text-align: left;
}

.card-content {
    font-size: 1em;
    font-weight: 600;
    color: #fff9;
    text-align: left;
}

.card-link {
    font-size: 1em;
    font-weight: 400;
    color: #ffffff;
    text-align: right;
}
</style>
