import axios from "axios";

const API = axios.create({
    baseURL: "https://booking.eminencesoftware.com/api",
    withCredentials: true, // For cookies/session if needed
});

// Intercept requests to include the Authorization token
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
