import { message } from 'antd';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../api/signUp';
import { SignupData, SignupResponse } from '../interface';

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
