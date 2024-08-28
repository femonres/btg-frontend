import axiosInstance from "../config/axiosConfig";

export const getUsers = async () => {
    const response = await axiosInstance.get('/users');
    return response.data;
};

export const getUserById = async (userId) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
};

export const updateUserProfile = async (userId, userData) => {
    const response = await axiosInstance.put(`/users/${userId}`, userData);
    return response.data;
};

export const resetUserBalance = async (userId) => {
    const response = await axiosInstance.put(`/users/${userId}/reset`);
    return response.data;
};

export const getUserTransactionHistory = async (userId) => {
    const response = await axiosInstance.get(`/users/${userId}/history`);
    return response.data;
};