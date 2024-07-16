import axios from 'axios';
import { SIGN_UP_URL } from '../config';
import { SignupData } from '../interface';

export const signUp = async (data: SignupData) => {
    const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        password: data.password,
        confirm_password: data.confirmPassword,
    };
    const response = await axios.post(SIGN_UP_URL, payload);
    return response.data;
};