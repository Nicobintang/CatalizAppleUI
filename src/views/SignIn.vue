<template>
    <!-- login view container -->
    <div class="flex items-center justify-center h-screen bg-cyan-900">
        <div class="max-w-md w-full bg-cyan-950 p-8 rounded-lg">
            <h1 class="text-center text-5xl font-bold mb-20 bg-gradient-to-r from-black to-white text-transparent bg-clip-text text-green-500 shadow-lg">LOGIN</h1>
            <div v-show="isVerified == -1" class="text-red-500">Wrong username or password</div>
                <!-- inpit username-->
                <froms
                :id="'username'"
                :type="'text'"
                :placeholder="'Username'"
                v-model="user"
                />
                <!-- input password -->
                <froms
                :id="'password'"
                :label="'Password'"
                :type="'password'"
                :placeholder="'Password'"
                v-model="password"
                />
                <!-- remember me and forgot password container -->
                <div class="flex justify-between items-center w-52 md:w-64 lg:w-[19rem]">
            </div>
            <!-- sign-in buttons -->
            <buttons :text="'Sign In'" class="mt-10" @click.prevent="SignIn"></buttons>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import froms from '@/components/froms.vue'
import buttons from '@/components/buttons.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import router from '@/router'


const authStore = useAuthStore()

const user = ref('')
const password = ref('')
const isVerified = ref(0)

const SignIn = (): void => {
    authStore.SignIn(user.value, password.value)
    if (authStore.isSignIn == false) {
        isVerified.value = -1
        console.log('Wrong username or password', authStore.isSignIn)
    } else {
        isVerified.value = 1
        console.log(user, password, authStore.isSignIn)
        router.push({ name: 'home' })
    }
}
</script>