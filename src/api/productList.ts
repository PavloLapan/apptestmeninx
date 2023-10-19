import {Product} from "../types/types";
import axios from "./api";

const BASE_URL = "/posts";

export const getAllProducts = async () => {
    return (await axios.get(`${BASE_URL}`)).data as Product[];
};