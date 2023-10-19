import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";
let count = 0;


const app = axios.create({
    baseURL: API,
    headers: {
        Accept: "application/json, text/plain, text/event-stream, */*",
        "Content-Type": "application/json",
    },
});

app.interceptors.request.use(
    async (config) => config,
    (error) => Promise.reject(error)
);

app.interceptors.response.use(
    (config) => config,
    async (error) => {
        if (error.response.status === 401 && count < 2) {
            count++;
        }
        return Promise.reject(error);
    }
);

export default app;