<script setup lang="ts">
    // import Slider from "@/components/Slider/"
import Slider from "@/components/Slider.vue";
</script>

<template>
    <div class="home-banner">
        <Slider  auto-play/>
    </div>
</template>

<style scoped>
.home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 185px;
    z-index: 98;
}
</style>
