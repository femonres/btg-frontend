import axiosInstance from "../config/axiosConfig";

export const getFunds = async () => {
    const response = await axiosInstance.get('/funds');
    return response.data;
};

export const subscribeToFund = async (userId, fundId, amount) => {
    const response = await axiosInstance.post(`/funds/${fundId}/subscribe`, {
      user_id: userId,
      fund_id: fundId,
      amount,
    });
  
    return response.data;
  };
  
  export const cancelFundSubscription = async (userId, fundId) => {  
    const response = await axiosInstance.post(`/funds/${fundId}/unsubscribe`, {
      user_id: userId,
      fund_id: fundId,
    });

  
    return response.data;
  };