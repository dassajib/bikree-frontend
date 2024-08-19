import axios from "axios"

import { SIGN_IN_URL } from "../config"
import { SigninDataInterface } from "../interface/SignIn"

export const signIn = async (data: SigninDataInterface) => {
    const response = await axios.post(SIGN_IN_URL, data);
    return response.data;
}