import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { CreateShopResponseInterface, CreateShopDataInterface } from "../interface/Shop";
import { createShop, getShops } from "../api/shop";

export const useShopList = () => {
    return useQuery({
        queryKey: ["shopList"],
        queryFn: () => getShops(),
    })
}

export const useCreateShop = (): UseMutationResult<CreateShopResponseInterface, Error, CreateShopDataInterface> => {
    const navigate = useNavigate();

    return useMutation<CreateShopResponseInterface, Error, CreateShopDataInterface>({
        mutationFn: (data: CreateShopDataInterface) => createShop(data),
        onSuccess: (data) => {
            navigate("/dashboard");
            message.success("New Shop Created!");
            console.log(data.data);
        },
        onError: (error: any) => {
            message.error(error.response?.data?.response_message?.non_field_errors[0]
            )
        }
    })
}