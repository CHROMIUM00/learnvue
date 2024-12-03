<script setup lang="ts">

import CheckBox from "@/components/CheckBox.vue";
</script>

<template>
    <div class="account-box">
        <div class="form">
            <div class="form-item">
                <div class="input-div">
                    <i class="iconfont icon-user"></i>
                    <input type="text" placeholder="用户名"/>
                </div>
                <!--                error-->
                <!--                <div class="error"><i class="iconfont icon-warning"></i></div>-->
            </div>
            <div class="form-item">
                <div class="input-div">
                    <i class="iconfont icon-lock"></i>
                    <input type="password" placeholder="密码"/>
                </div>
            </div>
            <div class="form-item">
                <div class="agree">
                    <CheckBox/>
                    <span>我已同意</span><a href="#">《隐私条款》</a>
                    <span>和</span><a href="#">《服务条款》</a>
                </div>
            </div>
            <a href="#" class="btn">登录</a>
        </div>
        <div class="action">
            <div class="url">
                <a href="#">忘记密码</a>
                <a href="#">免费注册</a>
            </div>
        </div>
    </div>
</template>

<style scoped>


.account-box {
    .form {
        padding: 0 20px;

        .form-item {
            margin-bottom: 28px;


            .input-div {
                position: relative;
                height: 36px;


                > i {
                    width: 34px;
                    height: 34px;
                    background-color: #cfcdcd;
                    color: #fff;
                    position: absolute;
                    left: 1px;
                    top: 1px;
                    text-align: center;
                    line-height: 34px;
                    font-size: 18px;
                }

                input {
                    padding-left: 44px;
                    border: 1px solid #cfcdcd;
                    height: 36px;
                    line-height: 36px;
                    width: 100%;

                    &.error {
                        border-color: darkred;
                    }

                    &.active, &.focus {
                        border-color: #27ba9b;
                    }
                }

                .code {
                    position: absolute;

                }
            }

            > .error {

            }

        }

        .agree {
            a {
                color: #069;
            }
        }

        .btn {
            display: block;
            width: 100%;
            height: 40px;
            color: #fff;
            text-align: center;
            line-height: 40px;
            background-color: rgb(37, 186, 155);

            &.disabled {
                background-color: #cfcdcd;
            }
        }
    }

    .action {
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .url {
            a {
                color: #999;
                margin-left: 10px;
            }
        }
    }
}

</style>
