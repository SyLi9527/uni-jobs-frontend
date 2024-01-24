<template>
    <div class="uni-card">
        <img class="uni-icon" :src="url" alt="">
        <h2>{{ label }}</h2>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";


const props = defineProps({
    label: String
})
const url = ref('')
const getImageUrl = async () => {       
    url.value = (await import(/* @vite-ignore */`../assets/uni-icon/${props.label}.svg`)).default
  }
onMounted(() => {
    getImageUrl()
})
</script>
<style scoped>
h2 {
    justify-self: center;
    filter: invert(75%);
}
h2:hover {
    
}


.uni-card {
    filter: invert(75%);
    background-color: #00DC8211;
    color: #ffffff;
    font-size: 1.25em;
    width: 20em;
    height: 15em;
    border-radius: 1em;
    margin: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    align-items: center;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0.5em #00DC82;
}
.uni-card:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1em #00DC82;
    cursor: pointer;
    filter: invert(100%) blur(0.5px) brightness(1.5);
}

.uni-icon {
    filter: brightness(1.5);
    width: 20rem;
    height: 10rem;
}
</style>