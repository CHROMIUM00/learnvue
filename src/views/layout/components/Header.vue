<script setup lang="ts">

import HeaderNav from "@/views/layout/components/HeaderNav.vue";
</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">BIG LOGO HERE</RouterLink>
            </h1>
            <HeaderNav/>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜"/>
            </div>
            <div class="cart">
                <a class="curr" href="#"><i class="iconfont icon-cart"></i><em>2</em></a>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: #f5f5f5;

    .container {
        display: flex;
        align-items: center;
        margin: auto;
        max-width: 1300px;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 132px;
            width: 100%;
            text-indent: -9999px;
            background: url("@/assets/logo.svg") no-repeat center 18px / contain;
        }
    }

    .search {
        width: 170px;
        height: 32px;
        display: flex;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        line-height: 32px;

        .icon-search {
            font-size: 18px;
            margin-left: 5px;
        }

        input {
            width: 140px;
            padding-left: 5px;
            color: #666;
        }
    }

    .cart {
        width: 50px;

        .curr {
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: relative;
            display: block;

            .icon-cart {
                font-size: 22px;
            }

            em {
                font-style: normal;
                position: absolute;
                right: 0;
                top: 0;
                padding: 1px 6px;
                line-height: 1;
                background: #27ba9b;
                color: #fff;
                font-size: 12px;
                border-radius: 10px;
            }
        }
    }
}
</style>
