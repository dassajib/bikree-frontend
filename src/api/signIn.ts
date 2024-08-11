import axios from "axios"

import { SIGN_IN_URL } from "../config"
import { SigninDataInterface } from "../interface/SignIn"

export const signIn = async (data: SigninDataInterface) => {
    const payload = {
        phone: data.phone,
        password: data.password
    };
    const response = await axios.post(SIGN_IN_URL, payload);
    return response.data;
}