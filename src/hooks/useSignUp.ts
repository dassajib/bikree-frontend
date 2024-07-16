import { message } from 'antd';
import { signUp } from '../api/signUp';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { SignupData, SignupResponse } from '../interface';
import { useNavigate } from 'react-router-dom';

export const useSignUp = (): UseMutationResult<SignupResponse, Error, SignupData> => {
    const navigate = useNavigate();
    return useMutation<SignupResponse, Error, SignupData>({
        mutationFn: (data) => signUp(data),
        onSuccess: () => {
            message.success('Successfully Signup!');
            navigate('/create-shop')
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.response_message?.non_field_errors);
        },
    });
};
