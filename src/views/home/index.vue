<script setup lang="ts">

import HomeCategory from "@/views/home/components/HomeCategory.vue";
import HomeBanner from "@/views/home/components/HomeBanner.vue";
import HomeNew from "@/views/home/components/HomeNew.vue";
</script>

<template>
    <div class="home container">
        <div class="home-entry">
            <div class="container">
                <HomeCategory/>
                <HomeBanner/>
            </div>
        </div>
        <HomeNew/>
    </div>
</template>

<style scoped>
.container {
    --gap: calc((100vh - 1300px) / 2);

    margin: auto;
    max-width: 1300px;
}
</style>
