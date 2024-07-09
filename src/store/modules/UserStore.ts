import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('token', () => {
    const token = ref("");

    const setToken = (tokenKey) => {
        console.log(token.value);
        token.value = tokenKey;
    };

    return {
        token,
        setToken,
    };
}, {
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'token',
                // 可改为sessionStorage安全一点
                storage: localStorage,
            },
        ],
    },
});
