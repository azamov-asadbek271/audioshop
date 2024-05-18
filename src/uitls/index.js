import axios from "axios"
const productUrl = "http://localhost:3000/products";

export const customFetch = axios.create({
    baseURL:productUrl,
})
