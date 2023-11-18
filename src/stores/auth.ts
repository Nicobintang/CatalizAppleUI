import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useAuthStore = defineStore('auth', () => {
    const username = ref('')
    const role = ref('')
    const isSignIn = ref(false)
    const userStore = useUserStore()

    const SignIn = (name: string, password: string): void => {
    userStore.userData.forEach((user) => {
        if (user.username === name && user.password === password) {
            username.value = user.username
            role.value = user.roles
            isSignIn.value = true
            console.log(username.value, role.value)
            }
        })
    }

    const SignOut = (): void => {
        username.value = ''
        role.value = ''
        isSignIn.value = false
    }

    return { username, role, isSignIn, SignIn, SignOut }
})