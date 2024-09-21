import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
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
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation<CreateShopResponseInterface, Error, CreateShopDataInterface>({
        mutationFn: (data: CreateShopDataInterface) => createShop(data),
        onSuccess: () => {
            // invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["shopList"] })
            navigate("/dashboard");
            message.success("New Shop Created!");
        },
    })
}