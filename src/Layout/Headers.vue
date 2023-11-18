<template>
    <header class="bg-white py-2 fixed w-full top-0 z-10">
        <nav class="bg-white py-0">
            <div class="container mx-auto">
            <div class="flex justify-center">
                <!-- Navbar for large screens -->
                <div class="flex w-[1036px] items-center justify-around px-0 max-[835px]:hidden">
                <div class="flex items-center justify-between">
                    <RouterLink v-if="authStore.isSignIn" @click="SignOut" to="#">Sign Out</RouterLink>             
                </div>          
                <RouterLink to="/" href="#"> <img class="w-4 object-scale-down" src="https://www.freepnglogos.com/uploads/apple-logo-png/carve-apple-logo-pumpkin-5.png" alt="logo"></RouterLink>
                <a href="#" class="text-xs">Store</a>
                <a href="#" id="app" class="text-xs">Mac</a>
                <a href="#" class="text-xs">iPad</a>
                <a href="#" class="text-xs">iPhone</a>
                <a href="#" class="text-xs">Watch</a>
                <a href="#" class="text-xs">Vision</a>
                <a href="#" class="text-xs">AirPods</a>
                <RouterLink to="/tvhome" href="#" class="text-xs">TV & Home</RouterLink>
                <a href="#" class="text-xs">Entertainment</a>
                <a href="#" class="text-xs">Accessories</a>
                <RouterLink to="/support" href="#" class="text-xs">Support</RouterLink>
                <a href="#" class="text-xs"><img class="w-4 object-scale-down" src="https://cdn-icons-png.flaticon.com/128/751/751463.png" alt=""></a>
                <a href="#"><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/128/11530/11530382.png" alt="shopping-bag"></a>
                </div>
            </div>
            <!-- Navbar for small screens (hidden by default) -->
            <div id="menuToggle" class="flex justify-between px-5 min-[836px]:hidden">
                <img class="w-4 object-scale-down" src="https://www.freepnglogos.com/uploads/apple-logo-png/carve-apple-logo-pumpkin-5.png" alt="logo">
                <div class="flex w-28 justify-between">
                <a href="#" class="text-xs pt-1"><img class="w-4 object-scale-down" src="https://cdn-icons-png.flaticon.com/128/751/751463.png" alt=""></a>
                <a href="#"><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/128/11530/11530382.png" alt="shopping-bag"></a>
                <!-- Hamburger button for small screens -->
                <button id="hamburgerIcon" class="block lg:hidden">
                    <img class="w-4 object-scale-down" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="">
                </button>
                </div>
            </div>
            </div>
        </nav>
    </header>

<RouterView />    
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const SignOut = (): void => {
    authStore.SignOut()
    router.push({ name: 'login' })
}
</script>