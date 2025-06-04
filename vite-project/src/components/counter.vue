<script setup>
import { useCounter } from '../stores/counter'
const counter = useCounter()
</script>
<template>
    <button @click="counter.countUp()">count is {{ counter.count }}</button>
    <button @click="counter.$reset()">Reset</button>
</template>