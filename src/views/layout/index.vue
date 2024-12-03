<script setup lang="ts">

import TopNav from "./components/TopNav.vue";
import Header from "./components/Header.vue"
import HeaderSticky from "./components/HeaderSticky.vue";
import Footer from "./components/Footer.vue";



</script>

<template>
    <div class="container">

        <TopNav/>
        <Header/>
        <HeaderSticky/>
        <main class="mainbody">
            <RouterView/>
        </main>
        <Footer/>
    </div>
</template>

<style scoped>



.mainbody {
    min-height: 600px;
}

</style>

