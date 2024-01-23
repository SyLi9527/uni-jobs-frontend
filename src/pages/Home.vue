<template>
    <div style="color: aliceblue;">
        <!-- Your content goes here -->
        <button class="subscribe-button">
            Subscribe me!
            <img src="../assets/arrow-up.svg" class="arrow-45deg" alt="">
        </button>
        <h1>The Website
            <br />
            <span class="h1-second">for Uni Opportunities</span>
        </h1>
        <p class="webiste-description">
            Uni-Opportunity website is an open-source project, which collects jobs and phd info from some top-level universities (mainly based in Europe). The website is built with Vue.js.
        </p>
        <div class="button-layout">
            <button class="start-button">
                <img src="../assets/rocket.svg" class="rocket-svg" alt="">    
                Get Started
            </button>
            <button class="reason-button">
                <img src="../assets/question-mark.svg" class="question-mark-svg" alt="">
                Why use me?
            </button>
        </div>
        <!-- TODO: tweak content -->
        <div class="card-layout" @mousemove="handleMouseMove">
            <Card title="UniJob" content="The website collects jobs from some top-level universities (mainly based in Europe)."
                ref="el1" style="background-size: 200% 200%; background-position: var(--mouse-x) var(--mouse-y); background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), #00DC82 25%, transparent 35%);"/>
            <Card title="PhD" content="The website collects phd info from some top-level universities (mainly based in Europe)."
                ref="el2" style="background-size: 200% 200%; background-position: var(--mouse-x) var(--mouse-y); background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), #00DC82 25%, transparent 35%);"/>
            <Card title="Research Group" content="The website collects research group info from some top-level universities (mainly based in Europe)."
                ref="el3" style="background-size: 200% 200%; background-position: var(--mouse-x) var(--mouse-y); background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), #00DC82 25%, transparent 35%);"/>
        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';
import Card from '../components/Card.vue';

const state = reactive({
  el1: ref(),
  el2: ref(),
  el3: ref(),
});

const { el1, el2, el3 } = toRefs(state);

const handleMouseMove = (e: MouseEvent) => {
    // console.log("new");
    const cards = [el1.value, el2.value, el3.value];
    for (let card of cards) {
        if (card) {
            const rect = card.$el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const posX = x / rect.width * 100;
            const posY = y / rect.height * 100;
            // console.log(posX, posY);
            card.$el.style.setProperty('--mouse-x', `${posX}%`);
            card.$el.style.setProperty('--mouse-y', `${posY}%`);
        }
    }
};

onMounted(() => {
    document.title = 'The Website for Uni Opportunities';
    document.addEventListener('mousemove', handleMouseMove); 
});

onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
/* Your styles go here */

.card:hover {
    border: #00DC82 0.5px solid;
}
.card-layout {
    display: flex;
    gap: 3em;
    justify-content: center;
    margin-top: 5em;
}

.button-layout {
    display: flex;
    gap: 1em;
}
.rocket-svg {
    width: 2em;
    transform: rotate(45deg);
    /* margin-right: 0.5em; */
}
.start-button {
    display: flex;
    align-items: center;
    margin-top: 5em;
    display: flex;
    align-items: center;
    background-color: #00DC82;
    border: transparent 0.5px solid;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    color: #0009;
    font-weight: 700;
}
.start-button:hover {
    background: #00DC82CC;
    color: #000;
}
.question-mark-svg {
    width: 1.5em;
    filter: invert(75%);
}
.reason-button {
    margin-top: 5em;
    display: flex;
    gap: 0.5em;
    align-items: center;
    background-color: transparent;
    border: #00DC82 0.5px solid;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    font-size: 1em;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: #00DC82;
}
.reason-button:hover {
    background: #fff3;
}
.subscribe-button {
    margin-top: 5em;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: #00DC82 0.5px solid;
    border-radius: 2em;
    padding: 0.5em 1em;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: #00DC82;
}
.subscribe-button:hover {
    background: #00DC8255;
}
.subscribe-button:hover .arrow-45deg{
    transform: rotate(90deg) scale(1.1);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
}
.subscribe-button .arrow-45deg {
    filter: invert(75%) sepia(100%) saturate(2000%) hue-rotate(80deg) brightness(90%) contrast(85%);
    width: 1em;
    margin-left: 0.5em;
    transform: rotate(45deg);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}


h1 {
    font-size: 4em;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-top: 0.5em;
    font-family: 'Montserrat', sans-serif;
}
.h1-second {
    color: #00DC82;
}

.webiste-description {
    width: 40%;
    font-size: 1.2em;
    margin-left: 0.5em;
    color: #CBD5E1CA;
    /* text-align: center; */
    font-family: 'Montserrat', sans-serif;
}
</style>
