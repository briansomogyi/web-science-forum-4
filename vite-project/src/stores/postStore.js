import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("postStore", () => {
    const ws = new WebSocket("ws://localhost:3000");
    const posts = ref([]);

    ws.onmessage = (event) => {
        const { type, data } = JSON.parse(event.data);
        if (type === "post_created") {
            posts.value.push(data);
        }
    };

    const addPost = async (post) => {
        ws.send(JSON.stringify({ type: "new_post", data: post }));
    };

    return { posts, addPost };
});
