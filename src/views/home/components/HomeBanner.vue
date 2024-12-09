<script setup lang="ts">
// import Slider from "@/components/Slider/"
import Slider from "@/components/Slider.vue";

const imglist = [
    "https://yanxuan-item.nosdn.127.net/5a115da8f2f6489d8c71925de69fe7b8.png",
    "https://yanxuan-item.nosdn.127.net/5a115da8f2f6489d8c71925de69fe7b8.png",
    "https://yanxuan-item.nosdn.127.net/5a115da8f2f6489d8c71925de69fe7b8.png"
]

</script>

<template>
    <div class="home-banner">
        <Slider :sliders="imglist" auto-play/>
    </div>
</template>

<style scoped>
.home-banner {
    width: 1300px;
    height: 500px;
    position: absolute;
    margin: auto;
    display: block;

    --gap: 114514;

    left: var(--gap);
    top: 185px;
    z-index: 98;
}
</style>
