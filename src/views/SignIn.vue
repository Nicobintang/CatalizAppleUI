<template>
    <!-- login view container -->
    <div class="flex items-center justify-center h-screen bg-cuy">
        <div class="max-w-md w-full bg-cuy p-10 ml-10">
            <h1 class="text-center text-3xl mb-20  text-black">LOGIN</h1>
            <div v-show="isVerified == -1" class="text-red-500">username Atau password Anda salah</div>
                <!-- form username-->
                <froms
                :id="'username'"
                :type="'text'"
                :placeholder="'Username'"
                v-model="user"
                />
                <!-- form password -->
                <froms
                :id="'password'"
                :label="'Password'"
                :type="'password'"
                :placeholder="'Password'"
                v-model="password"
                />
                <div class="flex justify-between items-center w-52 md:w-64 lg:w-[19rem]">
            </div>
            <!-- sign-in buttons -->
            <buttons :text="'Sign In'" class="mt-10" @click.prevent="SignIn"></buttons>
        </div>
        <div>
            <img src="../image/logo.jpg" alt="logoapple">
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
        console.log('username Atau password Anda salah', authStore.isSignIn)
    } else {
        isVerified.value = 1
        console.log(user, password, authStore.isSignIn)
        router.push({ name: 'home' })
    }
}
</script>