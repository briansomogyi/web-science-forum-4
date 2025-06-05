<template>
    <div>
        <h2>Communities</h2>
        <button @click="fetchCommunities">Refresh</button>
        <div v-for="community in communities" :key="community.id">
            <p>{{ community.name }} - {{ community.description }}</p>
            <button @click="deleteCommunity(community.id)">Delete</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCommunityStore } from "../stores/communityStore";

const { communities, fetchCommunities, deleteCommunity } = useCommunityStore();

onMounted(async () => {
    await fetchCommunities();
});
</script>
