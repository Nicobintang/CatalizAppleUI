<template>
    <div class="text-center">
    <h1 class="text-2xl font-bold mb-4">Sign In</h1>
    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../store';

export default {
    setup() {
    const login = () => {
        useAuthStore().login();
    };

    return {
        login,
    };
    },
};
</script>
