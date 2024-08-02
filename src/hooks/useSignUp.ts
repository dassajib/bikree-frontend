import { message } from 'antd';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../api/signUp';
import { SignupDataInterface, SignupResponseInterface } from '../interface/SignUp';

export const useSignUp = (): UseMutationResult<SignupResponseInterface, Error, SignupDataInterface> => {
    const navigate = useNavigate();

    return useMutation<SignupResponseInterface, Error, SignupDataInterface>({
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
