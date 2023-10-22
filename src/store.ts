    // src/store.ts
    import { defineStore } from 'pinia';

    export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isAuthenticated: false,
    }),
    getters: {
        isLoggedIn: (state) => state.isAuthenticated,
    },
    actions: {
        login() {
        this.isAuthenticated = true;
        },
        logout() {
        this.isAuthenticated = false;
        },
    },
    });
