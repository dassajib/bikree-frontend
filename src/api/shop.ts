import axios from "axios"

import { CREATE_SHOP_URL, SHOP_LIST_URL } from "../config"
import { CreateShopDataInterface } from "../interface/Shop"

const access = localStorage.getItem("access") || '';

export const getShops = async () => {
    const response = await axios.get(SHOP_LIST_URL, {
        headers: {
            Authorization: `Bearer ${access}`
        }
    })
    return response.data;
}

export const createShop = async (data: CreateShopDataInterface) => {
    const response = await axios.post(CREATE_SHOP_URL, data, {
        headers: {
            Authorization: `Bearer ${access}`,
        }
    })
    return response.data;
}