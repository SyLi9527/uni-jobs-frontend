<template>
    <nav @click="redirect">
        <router-link to="/home">
            <img loading="eager" src="../assets/uni.svg" class="logo uni" alt="Uni logo" />
        </router-link>
        <router-link to="/home">Home</router-link>
        <router-link to="/unijobs">UniJob</router-link>
        <router-link to="/uniphds">Phd</router-link>
        <router-link to="/unirgs">Research Group</router-link>
        <router-link to="/about">About</router-link>
        <router-link class="nav-login" to="/login">Login</router-link>
    </nav>
</template>

<script setup lang="ts">

const redirect = (e: MouseEvent) => {
    const to = (e.target as HTMLElement).getAttribute('href');
    if (to === '/uniphds' || to === '/unirgs' || to === '/login') {
        alert('This page is not available yet');
    }
};
</script>

<style scoped>
/* Navbar styles go here */
.logo.uni{
    margin-left: 3em;
    height: 3em;
    will-change: filter;
    transition: filter 300ms;
    filter: invert(100%);
}
.logo.uni:hover {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    filter: invert(100%) drop-shadow(0 0 20em #646cffaa);
}

nav {
    position: relative;
}

router-link:hover {
    text-decoration: underline;
    color: #9532f1;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* font-weight: bold; */
    /* transform: scale(1.1); */
    cursor: pointer;
}

.nav-login {
    position: absolute;
    right: 4em;
    top: 2em;
}
</style>
