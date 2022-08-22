import axiosInstance from "@components/utils/axios";

export const login = async (id: string) => {
    return await axiosInstance.get(`/api/${id}/login`);
};

export const updateNoodles = async (id: string, noodles: Array<boolean>) => {
    return await axiosInstance.post('/api/updateNoodles', { id, noodles });
};