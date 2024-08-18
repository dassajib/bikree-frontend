import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { SigninDataInterface, SigninResponseInterface } from "../interface/SignIn";
import { signIn } from "../api/signIn";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const useSignIn = (): UseMutationResult<SigninResponseInterface, Error, SigninDataInterface> => {
    const { setToken } = useAuthStore();
    const navigate = useNavigate();

    return useMutation<SigninResponseInterface, Error, SigninDataInterface>({
        mutationFn: (data) => signIn(data),
        onSuccess: (data) => {
            setToken(data.access, data.refresh);
            message.success('Successfully Signin!');
            navigate('/dashboard');
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.detail);
        }
    })
}