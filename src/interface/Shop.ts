export interface CreateShopResponseInterface {
    data: {};
    response_code: number;
    response_message: string;
}

export interface CreateShopDataInterface {
    uid: string;
    owner: {
        uid: string;
        full_name: { first: string; last: string };
        role: string;
    };
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    name: string;
    address: string | null;
    licence_no: string | null;
}