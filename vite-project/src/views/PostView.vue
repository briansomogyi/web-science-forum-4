<template>
    <div>
        <h2>Posts</h2>
        <div v-for="post in posts" :key="post.id">
            <p>{{ post.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiClient from "../api";

const posts = ref([]);

onMounted(async () => {
    const response = await apiClient.get("/posts");
    posts.value = response.data;
});
</script>
