import axios from "axios";
import { getTokenWithRefreshToken } from "./auth";

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    withCredentials: true
});

Axios.interceptors.request.use(
    async (config) => {
        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401 && !error.config._retry) {
            error.config._retry = true;
            try {
                const refreshToken = localStorage.getItem("refreshToken");
                if (refreshToken) {
                    const { accessToken } = await getTokenWithRefreshToken(refreshToken);
                    Axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                    return Axios(error.config);
                } else {
                    window.location.replace("/auth/login");
                }
            } catch (error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default Axios;
