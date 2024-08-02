export interface SignupDataInterface {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface SignupResponseInterface {
    success: boolean;
}
