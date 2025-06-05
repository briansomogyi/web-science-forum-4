<template>
    <div>
        <h2>Live Post Updates</h2>
        <button @click="addPost({ name: 'AI Ethics Discussion' })">Add Post</button>
        <div v-for="post in posts" :key="post.name">
            <p>{{ post.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { usePostStore } from "../stores/postStore";

const { posts, addPost } = usePostStore();
</script>
