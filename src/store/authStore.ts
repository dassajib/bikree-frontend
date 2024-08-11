import { create } from "zustand";

import { AuthState } from "../interface/SignIn";

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    refreshToken: null,
    setTokens: (accessToken, refreshToken) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        set({ accessToken, refreshToken });
    },
    clearTokens: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        set({ accessToken: null, refreshToken: null });
    }
}));