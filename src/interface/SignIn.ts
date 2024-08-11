export interface SigninDataInterface {
    phone: string;
    password: string;
}

export interface SigninResponseInterface {
    access: string;
    refresh: string;
}

export interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    setTokens: (accessToken: string, refreshToken: string) => void;
    clearTokens: () => void;
}