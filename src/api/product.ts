import axios from "./api";
import {Product} from "../types/types";

const BASE_URL = "/posts";

export const getProduct = async (id: string | undefined) => {
    return (await axios.get(`${BASE_URL}/${id}`)).data as Product;
};
