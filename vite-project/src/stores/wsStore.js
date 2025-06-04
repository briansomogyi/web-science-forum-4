import { defineStore } from 'pinia'
export const useWsStore = defineStore('wsStore', {
    state: () => {
        return {
            phone: ''
        }
    }
})