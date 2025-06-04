import { defineStore } from 'pinia'
export const useCounter = defineStore('counter', {
    state: () => {
        return {
            count: 0,
        }
    },
    actions: {
        countUp() {
            this.count++
        },
    }
})