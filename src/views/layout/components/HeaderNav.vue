<script setup lang="ts">

</script>

<template>
    <ul class="nav">
        <li class="nav-item home">
            <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="nav-item"><a href="#">美食</a></li>
        <li class="nav-item"><a href="#">餐厨</a></li>
        <li class="nav-item"><a href="#">艺术</a></li>
        <li class="nav-item"><a href="#">电器</a></li>
        <li class="nav-item"><a href="#">居家</a></li>
        <li class="nav-item"><a href="#">洗护</a></li>
        <li class="nav-item"><a href="#">孕婴</a></li>
        <li class="nav-item"><a href="#">服装</a></li>
        <li class="nav-item"><a href="#">杂货</a></li>
    </ul>
</template>

<style scoped>
.nav {
    list-style: none;
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;

            &:hover {
                color: #27ba9b;
                border-bottom: 1px solid #27ba9b;
            }
        }
    }
}
</style>
