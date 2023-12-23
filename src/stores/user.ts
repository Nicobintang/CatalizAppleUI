import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
const userData = [
    {
    username: 'admin',
    password: 'admin',
    roles: 'user'
    },
]

return { userData } 
})