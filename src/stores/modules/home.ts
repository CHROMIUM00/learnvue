import {defineStore} from "pinia";
import {ref} from "vue";
import request from "axios";

export const useHomeStore = defineStore("home", {
    state: () => ({
        categoryList: []
    }),
    actions: {
        async getAllCategories() {
            const res = await request.get("/home/categories/head");
            console.log(res)
        }
    }
});
