import { defineStore } from "pinia";
import apiClient from "../api";

export const useCommunityStore = defineStore("communityStore", {
    state: () => ({
        communities: [],
    }),
    actions: {
        async fetchCommunities() {
            const response = await apiClient.get("/communities");
            this.communities = response.data;
        },
        async addCommunity(community) {
            await apiClient.post("/communities", community);
            this.fetchCommunities(); // Refresh the list
        },
        async deleteCommunity(id) {
            await apiClient.delete(`/communities/${id}`);
            this.fetchCommunities();
        },
    },
});
