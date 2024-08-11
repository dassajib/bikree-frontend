import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { SigninDataInterface, SigninResponseInterface } from "../interface/SignIn";
import { signIn } from "../api/signIn";
import { useAuthStore } from "../store/authStore";

export const useSignIn = (): UseMutationResult<SigninResponseInterface, Error, SigninDataInterface> => {
    const { setTokens } = useAuthStore();
    const navigate = useNavigate();

    return useMutation<SigninResponseInterface, Error, SigninDataInterface>({
        mutationFn: (data) => signIn(data),
        onSuccess: (data) => {
            setTokens(data.access, data.refresh);
            message.success('Sign In Successfully!');
            navigate('/dashboard');
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.detail);
        }
    })
}