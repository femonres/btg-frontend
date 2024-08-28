import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('Response error:', error.response.data);
            alert(`Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
        } else if (error.request) {
            console.error('Request error:', error.request);
            alert('Error: No response received from the server.');
        } else {
            console.error('Error message:', error.message);
            alert(`Error: ${error.message}`);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;