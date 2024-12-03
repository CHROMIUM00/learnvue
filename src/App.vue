<script setup lang="ts">
import request from "./utils/request";
import {onMounted} from "vue";

onMounted(async () => {
    const res = await request.get("/home/index");
    console.log(res);
});
</script>


<template>
    <RouterView />
</template>



