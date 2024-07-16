import { create } from 'zustand';
import { SignupState } from '../interface';

export const useSignupStore = create<SignupState>((set) => ({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    setFirstName: (firstName) => set({ firstName }),
    setLastName: (lastName) => set({ lastName }),
    setPhone: (phone) => set({ phone }),
    setPassword: (password) => set({ password }),
    setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}));
