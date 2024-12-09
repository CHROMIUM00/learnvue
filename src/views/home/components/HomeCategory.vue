<script setup lang="ts">

import {useHomeStore} from "@/stores"
import Skeleton from "@/components/Skeleton.vue";

const store = useHomeStore();

</script>

<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="i in 9" :key="i">
                <RouterLink to="/">{{ 'title' }}</RouterLink>
                <RouterLink to="/">{{ 'sub1' }}</RouterLink>
                <RouterLink to="/">{{ 'sub2' }}</RouterLink>
                <div class="layer">
                    <h4>分类推荐 <small>根据dgnujdtniujhtjnthnjkgr</small></h4>
                    <ul>
                        <li v-for="j in 9" :key="i">
                            <RouterLink to="/">
                                <img src="https://yanxuan-item.nosdn.127.net/5a115da8f2f6489d8c71925de69fe7b8.png"
                                     alt="">
                                <div class="info">
                                    <p class="name ellipsis-2">{{ i }}-th itemname</p>
                                    <p class="desc ellipsis">itemdescription</p>
                                    <p class="price"><i>￥</i>1234.56</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 99;

    .menu {
        li {
            list-style: none;
            padding-left: 40px;
            height: 55px;
            line-height: 55px;

            &:hover {
                background: #27ba9b;
            }

            a {
                margin-right: 4px;
                color: #fff;

                &:first-child {
                    font-size: 16px;
                }
            }

            .layer {
                width: 990px;
                height: 500px;
                background: rgba(255, 255, 255, 1);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;

                h4 {
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 80px;

                    small {
                        font-size: 16px;
                        color: #666;
                    }
                }

                ul {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        width: 310px;
                        height: 120px;
                        margin-right: 15px;
                        margin-bottom: 15px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background: #fff;

                        &:nth-child(3n) {
                            margin-right: 0;

                        }

                        &:hover {
                            background: #e3f9f4;
                        }

                        a {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            padding: 10px;


                            img {
                                width: 95px;
                                height: 95px;
                            }

                            .info {
                                padding-left: 10px;
                                line-height: 24px;
                                overflow: hidden;

                                .name {
                                    font-size: 16px;
                                    color: #666;
                                }

                                .desc {
                                    color: #999;
                                }

                                .price {
                                    font-size: 22px;
                                    color: darkred;

                                    i {
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &:hover {
                .layer {
                    display: block;
                }
            }
        }
    }
}
</style>
