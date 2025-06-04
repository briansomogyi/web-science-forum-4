import { useWsStore } from './stores/wsStore'
export const ws = new
    WebSocket('ws://localhost:8080')
ws.onopen = () => {
    console.log(`Connected to server`)
}
ws.onmessage = (ws) => {
    const wsStore = useWsStore();
    wsStore.phone = ws.data;
    console.log('Message from server:', ws.data)
}