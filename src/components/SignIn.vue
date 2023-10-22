<template>
    <div>
        <h1>Sign In</h1>
        <button @click="login">Sign In</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store';

const login = () => {
    useAuthStore().login();
};
</script>
