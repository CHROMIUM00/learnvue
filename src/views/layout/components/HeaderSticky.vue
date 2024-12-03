<script setup lang="ts">

import HeaderNav from "@/views/layout/components/HeaderNav.vue";

import {onMounted, onUnmounted, ref} from "vue";

const isShow = ref(false);
const handlerScroll = () => {
    const y = document.documentElement.scrollTop;
    if (y >= 259) {
        isShow.value = true;
    } else {
        isShow.value = false;
    }
}

onMounted(() => {
    window.addEventListener("scroll", handlerScroll);
})
onUnmounted(() => {
    window.removeEventListener("scroll", handlerScroll);
})

</script>

<template>
    <div class="sticky" :class="{ show: isShow }">
        <div class="container">
            <RouterLink class="logo" to="/"/>
            <HeaderNav/>
            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sticky {
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    transform: translateY(-100%);
    //opacity: 0;

    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;
    }

    .container {
        margin: auto;
        max-width: 1300px;
        display: flex;
        align-items: center
    }

    .logo {
        width: 200px;
        height: 80px;
        background: url("@/assets/logo.svg") no-repeat right 2px;
        background-size: 160px auto;
    }

    .right {
        width: 220px;
        display: flex;
        text-align: center;
        padding-left: 40px;
        border-left: 2px solid #27ba9b;

        a {
            width: 38px;
            margin-right: 40px;
            font-size: 16px;
            line-height: 1;

            &:hover {
                color: #27ba9b;
            }
        }
    }
}
</style>
