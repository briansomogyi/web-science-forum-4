import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommunityStore = defineStore("communityStore", () => {
    const ws = new WebSocket("ws://localhost:3001");
    const communities = ref([]);

    ws.onmessage = (event) => {
        const { type, data } = JSON.parse(event.data);
        if (type === "community_created") {
            communities.value.push(data);
        }
    };

    const addCommunity = (community) => {
        ws.send(JSON.stringify({ type: "new_community", data: community }));
    };

    return { communities, addCommunity };
});
