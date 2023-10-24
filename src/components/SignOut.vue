<template>
    <div class="text-center">
    <h1 class="text-2xl font-bold mb-4">Sign Out</h1>
    <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../store';

export default defineComponent({
    setup() {
    const logout = () => {
        useAuthStore().logout();
    };

    return {
        logout,
    };
    },
});
</script>
  
