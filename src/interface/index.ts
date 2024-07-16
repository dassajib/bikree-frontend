export interface SignupData {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface SignupResponse {
    success: boolean;
}

export interface SignupState {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setPhone: (phone: string) => void;
    setPassword: (password: string) => void;
    setConfirmPassword: (confirmPassword: string) => void;
}