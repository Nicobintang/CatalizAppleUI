import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
const userData = [
    {
    username: 'user',
    password: 'admin',
    roles: 'user'
    },
]

return { userData } 
})