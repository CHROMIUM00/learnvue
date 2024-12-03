<script setup lang="ts">

</script>

<template>
    <nav class="top-nav">
        <div class="container">
            <ul>
                <li><a href="#">LOGO HERE</a></li>
                <li><a href="#">退出登录</a></li>
                <li><RouterLink to="/login">请先登录</RouterLink></li>
                <li><a href="#">免费注册</a></li>
                <li><a href="#">我的订单</a></li>
                <li><a href="#">会员中心</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">手机</a></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.top-nav {
    background-color: #333;
.container {
    margin: auto;
    max-width: 1300px;
}
    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        li {
            a {
                padding: 0 15px;
                color: lightgray;
                line-height: 1;
                display: inline-block;
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover {
                    color: indianred;
                }
            }
            ~ li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>
