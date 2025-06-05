import { defineStore } from "pinia";
import { ref } from "vue";

export const useSocketStore = defineStore("socketStore", () => {
    const ws = new WebSocket("ws://localhost:3001");
    const messages = ref([]);

    ws.onmessage = (event) => {
        messages.value.push(event.data);
    };

    return { messages, ws };
});
