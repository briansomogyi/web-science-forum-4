<template>
    <div>
        <h2>Communities</h2>
        <button @click="addCommunity({ name: 'TechTalk', description: 'Tech discussions' })">Add Community</button>
        <div v-for="community in communities" :key="community.name">
            <p>{{ community.name }} - {{ community.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { useCommunityStore } from "../stores/communityStore";

const { communities, addCommunity } = useCommunityStore();
</script>
