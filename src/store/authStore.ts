import { create } from "zustand";

import { AuthState } from "../interface/SignIn";

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    refreshToken: null,
    setToken: (accessToken, refreshToken) => {
        localStorage.setItem('access', accessToken);
        localStorage.setItem('refresh', refreshToken);
        set({ accessToken, refreshToken });
    },
    clearToken: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        set({});
    }
}))