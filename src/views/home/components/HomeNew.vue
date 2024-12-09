<script setup lang="ts">

import HomePanel from "@/views/home/components/HomePanel.vue";
import More from "@/components/More.vue";
</script>

<template>
    <div class="home-new">
        <HomePanel title="NEW" sub-title="NEWSUB">
            <template #right>
                <More/>
            </template>
            <ul class="goods-list">
                <li v-for="item in 4" :key="item">
                    <RouterLink to="/">
                        <img src="https://yanxuan-item.nosdn.127.net/5a115da8f2f6489d8c71925de69fe7b8.png" alt=""/>
                        <p class="name ellipsis">itemdescription</p>
                        <p class="price">￥1234.56</p>
                    </RouterLink>
                </li>
            </ul>
        </HomePanel>
    </div>
</template>

<style scoped>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;
        background: #f0f9f4;

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding: 12px 30px 0 30px;
            text-align: center;
        }

        .price {
            color: darkred;
        }
    }
}
</style>
