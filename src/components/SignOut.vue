<template>
    <div>
    <h1>Sign Out</h1>
    <button @click="logout">Sign Out</button>
    </div>
</template>

<script>
import { useAuthStore } from '../store';

const logout = () => {
    useAuthStore().logout();
};
</script>
