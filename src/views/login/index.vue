<script setup lang="ts">

import LoginForm from "@/views/login/components/LoginForm.vue";
</script>

<template>
    <div class="login">
        <header class="login-header">
            <div class="container">
                <h1 class="logo">
                    <RouterLink to="/">LOGO</RouterLink>
                </h1>
                <h3 class="sub">
                    <slot>欢迎登录</slot>
                </h3>
                <RouterLink class="entry" to="/">进入网站首页 >></RouterLink>
            </div>
        </header>
        <section class="login-section">
            <div class="wrapper">
                <nav>
                    <a href="#">登录</a>
                </nav>
                <LoginForm/>
            </div>
        </section>
        <footer class="login-footer">
            <div class="container">
                <p>
                    <a href="#">关于我们</a>
                    <a href="#">帮助中心</a>
                    <a href="#">售后服务</a>
                    <a href="#">配送验收</a>
                    <a href="#">商务合作</a>
                    <a href="#">搜索推荐</a>
                    <a href="#">友情链接</a>
                </p>
                <p>CopyRight </p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.login-header {
    background: #fff;
    border-bottom: 1px solid #e4e4e4;

    .container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 132px;
            width: 100%;
            text-indent: -9999px;
            background: url(../../assets/logo.svg) no-repeat center 18px / contain;
        }
    }

    .sub {
        flex: 1;
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 38px;
        margin-left: 20px;
        color: #666;
    }

    .entry {
        width: 120px;
        margin-bottom: 38px;
        font-size: 16px;
        color: #27ba9b;
    }


}

.login-section {
    //background: url(../../assets/login-bg.jpg);
    background-color: #27ba9b;
    height: 488px;
    position: relative;

    .wrapper {
        width: 380px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 54px;
        transform: translate(100px);
        box-shadow: 0 0 10px rbga(0, 0, 0, 0.15);

        nav {
            font-size: 14px;
            height: 55px;
            margin-bottom: 20px;
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            padding: 0 40px;
            text-align: right;
            align-items: center;

            a {
                flex: 1;
                line-height: 1;
                display: inline-block;
                font-size: 18px;
                position: relative;
                text-align: center;
            }
        }
    }
}

.login-footer {
    padding: 30px 0 50px;
    background-color: #fff;

    p {
        text-align: center;
        color: #999;
        padding-top: 20px;

        a {
            line-height: 1;
            padding: 0 10px;
            color: #999;
            display: inline-block;

            ~ a {
                border-left: 1px solid #ccc;
            }
        }
    }
}
</style>
